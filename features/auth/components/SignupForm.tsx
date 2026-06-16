"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";

import {
  signupSchema,
  SignupFormValues,
} from "../schemas/signup.schema";

import { useSignup } from "../hooks/useSignup";

export function SignupForm() {
  const router = useRouter();

  const signupMutation = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (
    values: SignupFormValues
  ) => {
    await signupMutation.mutateAsync(values);

    router.push("/");
  };

  return (
    <Card className="w-full max-w-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <h1 className="text-2xl font-bold">
          Create Account
        </h1>

        <Input
          label="Name"
          error={errors.name?.message}
          {...register("name")}
        />

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
          isLoading={signupMutation.isPending}
        >
          Create Account
        </Button>
      </form>
    </Card>
  );
}