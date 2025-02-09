import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const useEnsureUserExists = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  console.log("user:", user);

  console.log("isLoading:", "isAuthenticated:", isAuthenticated);
  console.log("running ensure user exists");
  async function mutationFn() {
    console.log("Fetching token...");
    const token = await getAccessTokenSilently();
    console.log("Token retrieved:", token);

    console.log("Sending request to backend...");
    const response = await axios.post(
      "http://localhost:5000/post-login", // ✅ Fixed URL
      {},
      { headers: { Authorization: `Bearer ${token}` } },
    );

    console.log("Response received:", response.data);
    return response.data;
  }

  const mutation = useMutation({
    mutationFn,
    onError: (error) => {
      console.error("mutation error", error);
    },
    onSuccess: () => {
      console.log("mutation ran successfully");
    },
  });

  useEffect(() => {
    console.log("in the effect");
    console.log("is auth", isAuthenticated);
    if (isAuthenticated) {
      console.log("running mutation");
      mutation.mutate();
    }
  }, [isAuthenticated]);

  return mutation;
};

export default useEnsureUserExists;
