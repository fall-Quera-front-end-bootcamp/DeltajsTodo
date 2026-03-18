import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth as useAuthContext } from "@/auth/AuthProvider";

export const useAuth = () => useAuthContext();

export const useAuthGuard = (redirectTo = "/login") => {
  const router = useRouter();
  const { user, loading } = useAuthContext();

  useEffect(() => {
    if (!loading && !user) {
      router.replace(redirectTo);
    }
  }, [loading, redirectTo, router, user]);

  return { user, loading };
};
