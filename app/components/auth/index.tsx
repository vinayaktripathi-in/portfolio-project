import { useAuth } from "../../hooks/useAuth";

interface AuthProviderProps {
  children: React.ReactNode;
  // token: string | null;
}

const token = localStorage.getItem("token");

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  useAuth(token);

  if (token) {
    return <>{children}</>;
  }

  return null;
};

export default AuthProvider;
