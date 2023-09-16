import { useAuth } from "../../hooks/useAuth";

interface AuthProviderProps {
  children: React.ReactNode;
  // token: string | null;
}
function getTokenFromLocalStorage() {
  const isServer = typeof window === "undefined";
  if (!isServer) {
    return localStorage.getItem("token");
  }
  return null; // Return null if running on the server or if no token is found
}

// Usage:
const token = getTokenFromLocalStorage();

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  useAuth(token);

  if (token) {
    return <>{children}</>;
  }

  return null;
};

export default AuthProvider;
