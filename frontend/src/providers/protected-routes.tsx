import { useSession } from "@/hooks/useSession";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedAuthRoutes({
  allowedRoles,
}: {
  allowedRoles: string[];
}) {
  const location = useLocation();
  const { user } = useSession();
  return allowedRoles.includes(user?.role) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
}
