"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import {loginRequest} from '@/redux/reducers/AuthReducers/index'

import { useAppDispatch , useAppSelector  } from "@/hooks/reduxHooks";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormFields = z.infer<typeof schema>;

const LoginForm = () => {

  const dispatch = useAppDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const error = useAppSelector((state)=> state.auth.error)

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    dispatch(loginRequest(data))
    if(error){
      reset()
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} type="text" />
        {errors.email && <span>{errors.email?.message}</span>}
        <input {...register("password")} type="password" />
        {errors.password && <span>{errors.password?.message}</span>}

        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
