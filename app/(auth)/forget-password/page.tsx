"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

export default function ForgetPassword() {
  const [email, setEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    if (!email || email === "") {
      setError("Please enter your email");
      setPending(false);
      return;
    }

    try {
      const res = await axios.post("/api/forget_password", { email });

      if (res.status === 200) {
        setError("");
        router.push("/password-reset-email-sent");
        return;
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.error || "Something went wrong");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Forget password</CardTitle>
          <CardDescription>Enter your email to reset your password</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="john@example.com" />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </CardContent>
          <CardFooter className="space-y-2 mt-4">
            <Button type="submit" className="w-full" disabled={pending}>Reset password</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}