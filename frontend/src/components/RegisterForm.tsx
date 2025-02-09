import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { useMutation } from "@tanstack/react-query";
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
import axios from "axios";
import { error } from "console";

// Define the schema
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export default function LoginForm() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const createAccountMutation = useMutation({
    mutationFn: async (data: any): Promise<void> => {
      return await axios.post("http://localhost:5000/users", data);
    },
    onSuccess: () => {
      toast({
        title: "Created Account",
        description: "Account created successfully",
      });
    },
    // TODO: typesafety here
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });
  const onSubmit = (data: any) => {
    console.log("Login Data:", data);
    createAccountMutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex mx-auto ">
          <div className="text-xl font-medium font-sans">
            Create a new account
          </div>
        </div>

        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="name" placeholder="Your Name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          {createAccountMutation.status === "pending" ? (
            <div className="flex gap-3 items-center justify-center">
              <Loader2 className="animate-spin" />
              <div className="font-sans ">Loading..</div>
            </div>
          ) : (
            "Create Account"
          )}
        </Button>
      </form>
    </Form>
  );
}
