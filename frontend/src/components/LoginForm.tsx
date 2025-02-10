import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Define the schema
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

type LoginFormProps = {
  setForm: (form: string) => void;
};
export default function LoginForm({ setForm }: LoginFormProps) {
  const [error, serError] = useState<string | null>(null);
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mutateFn = async (data: any): Promise<void> => {
    console.log("mutating here:", data);
    return await axios.post("http://localhost:5000/users/login", data);
  };

  const loginMutation = useMutation({
    mutationFn: mutateFn,
    onSuccess: () => {
      console.log("Login successful");
      serError(null);
    },
    onError: (error: any) => {
      serError(error.response.data.message);
    },
  });

  const onSubmit = (data: any) => {
    loginMutation.mutate(data);
    console.log("Login Data:", data);
    // Handle login logic here
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error ? (
          <div className=" text-red-600 p-1 rounded-md">{error}</div>
        ) : null}

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Login
        </Button>

        <div className="mt-5 flex-col w-full flex items-center justify-center h-2">
          <div className=""> or </div>
          <div
            onClick={() => setForm("register")}
            className="text-blue-600 cursor-pointer font-bold"
          >
            Create a new account{" "}
          </div>
        </div>
      </form>
    </Form>
  );
}
