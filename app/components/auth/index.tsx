import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(loading);
    if (localStorage) {
      const token = localStorage.getItem("token");

      if (!token) {
        window.location.replace("/signin");
      }
    }
  }, [router]);
  function getTokenFromLocalStorage() {
    const isServer = typeof window === "undefined";
    if (!isServer) {
      return localStorage.getItem("token");
    }
    return null; // Return null if running on the server or if no token is found
  }

  const token = getTokenFromLocalStorage();
  if (token) {
    return <>{children}</>;
  } else
    <>
      <Loading />
    </>;
};

export default AuthProvider;
