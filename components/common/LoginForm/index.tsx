"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

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

  const router = useRouter()


  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    dispatch(loginRequest(data));
    router.push('/')   
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[60%] bg-white rounded shadow-lg p-8">
        <div className="flex flex-col gap-5 w-full">
        <Input {...register("email")} type="text" placeholder="Email" />
        {errors.email && <span>{errors.email?.message}</span>}
        <Input {...register("password")} type="password" placeholder="Password" />
        {errors.password && <span>{errors.password?.message}</span>}

        <Button type="submit">
          submit
        </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
