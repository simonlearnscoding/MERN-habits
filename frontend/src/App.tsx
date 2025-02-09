import { Routes, Route } from "react-router-dom";
import { Profile } from "./pages/Profile";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "@/providers/ProtectedRoute"; // ✅ Correct import

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
