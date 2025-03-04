// "use client";

// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// export default function ResetPassword() {
//   const [password, setPassword] = useState<string>("");
//   const [confirmPassword, setConfirmPassword] = useState<string>("");
//   const [error, setError] = useState<string | null>(null);
//   const [pending, setPending] = useState<boolean>(false);
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const token = searchParams.get("token"); // Extract the token from the query parameters

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null); // Reset error state
//     setPending(true);

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       setPending(false);
//       return;
//     }

//     if (!token) {
//       setError("Invalid or missing token");
//       setPending(false);
//       return;
//     }

//     try {
//       const res = await fetch("/api/reset_password", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ password, token }),
//       });

//       if (!res.ok) {
//         const message = await res.text(); // Fetch the error message
//         setError(message || "Failed to reset password");
//         setPending(false);
//         return;
//       }

//       router.push("/password-reset-success"); // Redirect to login after successful password reset
//     } catch (error) {
//       console.error(error);
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setPending(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <Card className="w-[350px]">
//         <CardHeader>
//           <CardTitle>Reset Password</CardTitle>
//           <CardDescription>Enter a new password to reset your account</CardDescription>
//         </CardHeader>
//         <form onSubmit={handleSubmit}>
//           <CardContent className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="password">New Password</Label>
//               <Input
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 name="password"
//                 type="password"
//                 placeholder="Enter new password"
                
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="confirmPassword">Confirm Password</Label>
//               <Input
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 name="confirmPassword"
//                 type="password"
//                 placeholder="Confirm new password"
                
//               />
//             </div>
//             {error && <p className="text-sm text-red-500">{error}</p>}
//           </CardContent>
//           <CardFooter>
//             <Button type="submit" className="w-full" disabled={pending}>
//               {pending ? "Setting Password..." : "Set Password"}
//             </Button>
//           </CardFooter>
//         </form>
//       </Card>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResetPassword() {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // Extract the token from the query parameters

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error state
    setPending(true);

    if(password == "" || confirmPassword == ""){
      setError("Please fill all the fields");
      setPending(false);
      return;
      }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setPending(false);
      return;
    }

    if (!token) {
      setError("Invalid or missing token");
      setPending(false);
      return;
    }

    try {
      const res = await fetch("/api/reset_password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, token }),
      });

      if (!res.ok) {
        const message = await res.text(); // Fetch the error message
        setError(message || "Failed to reset password");
        setPending(false);
        return;
      }

      router.push("/password-reset-success"); // Redirect to login after successful password reset
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
          <CardDescription>Enter a new password to reset your account</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                placeholder="Enter new password"
                
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                name="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full mt-4" disabled={pending}>
              {pending ? "Setting Password..." : "Set Password"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}