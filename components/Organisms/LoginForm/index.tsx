"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Input from "@/components/Atoms/Input";

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
      email: "sdsd",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const error = useAppSelector((state)=> state.auth.error)

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log("sssds")
    dispatch(loginRequest(data))
    
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[60%] bg-white rounded shadow-lg p-8">
        <div className="flex flex-col gap-5 w-full">
        <Input {...register("email")} type="text" label="Email"/>
        {errors.email && <span>{errors.email?.message}</span>}
        <Input {...register("password")} type="password" label="Password" />
        {errors.password && <span>{errors.password?.message}</span>}

        <button type="submit" className="bg-black text-white p-2 rounded-md">
          submit
        </button>
        </div>
        
      </form>
    </div>
  );
};

export default LoginForm;
