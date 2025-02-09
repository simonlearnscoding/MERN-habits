import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import axios from "axios";
import { data } from "@remix-run/router";

export const useAuth = () => {
  const setUser = useAuthStore((state) => state.setUser);

  return useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/self/auth");
      if (res.data.isAuthenticated) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
      return data;
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};
