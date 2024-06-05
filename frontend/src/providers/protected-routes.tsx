import { useSession } from "@/hooks/useSession";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedAuthRoutes() {
  const location = useLocation();
  const { user } = useSession();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
}
