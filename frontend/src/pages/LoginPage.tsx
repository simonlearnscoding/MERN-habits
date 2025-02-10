import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import { useState } from "react";
export default function Page() {
  const [form, setForm] = useState("login");
  return (
    <div className="flex w-screen h-screen bg-gray-300 justify-center items-center">
      <div className="w-96 p-8 h-fit bg-gray-200 rounded-lg">
        {form === "login" ? (
          <LoginForm setForm={setForm} />
        ) : (
          <RegisterForm setForm={setForm} />
        )}
      </div>
    </div>
  );
}
