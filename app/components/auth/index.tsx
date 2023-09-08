import { useAuth } from "../../hooks/useAuth";

interface AuthProviderProps {
  children: React.ReactNode;
  loading: boolean;
  token: string | null;
}

const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
  loading,
  token,
}) => {
  useAuth(token);

  if (loading) {
    return <>Loading...</>;
  }

  if (token) {
    return <>{children}</>;
  }

  return null;
};

export default AuthProvider;
