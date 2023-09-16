import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useAuth(token: string | null): void {
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      localStorage.clear();
      router.push("/signin");
    }
  }, [router, token]);
}
