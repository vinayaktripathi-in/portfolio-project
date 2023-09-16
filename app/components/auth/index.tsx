import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useAuth } from "../../hooks/useAuth";

interface AuthProviderProps {
  children: React.ReactNode;
}

function getTokenFromLocalStorage() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true); // Start with loading state as true
  const token = getTokenFromLocalStorage();
  useAuth(token);

  useEffect(() => {
    setLoading(false);
  }, [useAuth]);

  if (loading) {
    return (
      <>
        <div className="w-full min-h-screen flex justify-center items-center">
          <AiOutlineLoading3Quarters className="animate-spin" />
        </div>
      </>
    ); // Display a loading spinner
  }

  if (token) {
    return <>{children}</>; // Render children when token is available
  }

  return null;
};

export default AuthProvider;
