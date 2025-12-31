import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect(); // ✅ ab function exist karta hai
    }
  }, [isAuthenticated, loginWithRedirect]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg font-semibold">Redirecting to login...</p>
    </div>
  );
}
