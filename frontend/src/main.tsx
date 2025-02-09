import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Use BrowserRouter instead
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-yq424yyo7e514hs3.us.auth0.com" // e.g., dev-abc123.auth0.com
      clientId="UChpHdAe0furjn3l5q5C4B5FX0oIeJwq" // e.g., Abc123Def456Ghi789
      authorizationParams={{
        redirect_uri: "http://localhost:5173/home", // Redirect after login
      }}
    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
//
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//       <App />
//     </Auth0Provider>
//   </React.StrictMode>,
// );
