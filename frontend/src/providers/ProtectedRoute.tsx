import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute() {
  const { user } = useAuthStore();
  const { isLoading } = useAuth();

  if (isLoading) return <p>Loading...</p>;

  return user ? <Outlet /> : <Navigate to="/login" />;
}
