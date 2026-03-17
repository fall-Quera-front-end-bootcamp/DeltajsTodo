"use client";

import Button from "@/components/ui/Button";
import { useAuth } from "@/auth/AuthProvider";

export default function LoginButtons() {
  const { loginGoogle, loginGithub } = useAuth();

  return (
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button onClick={loginGoogle} className="flex-1" variant="primary">
          ادامه با گوگل
        </Button>
        <Button onClick={loginGithub} className="flex-1" variant="secondary">
          ادامه با گیت‌هاب
        </Button>
      </div>  
  );
}
