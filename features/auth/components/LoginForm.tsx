"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";

import {
  loginSchema,
  LoginFormValues,
} from "../schemas/login.schema";

import { useLogin } from "../hooks/useLogin";

export function LoginForm() {
  const router = useRouter();

  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (
    values: LoginFormValues
  ) => {
    await loginMutation.mutateAsync(values);

    router.push("/");
  };

  return (
    <Card className="w-full max-w-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <h1 className="text-2xl font-bold">
          Login
        </h1>

        <Input
          label="Email"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          label="Password"
          type="password"
          error={errors.password?.message}
          {...register("password")}
        />

        <Button
          type="submit"
          className="w-full"
          isLoading={loginMutation.isPending}
        >
          Login
        </Button>
      </form>
    </Card>
  );
}