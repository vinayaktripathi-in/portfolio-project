import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage) {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/signin");
      }
    }
  }, [router]);

  // Render children when authenticated
  return <>{children}</>;
};

export default AuthProvider;
