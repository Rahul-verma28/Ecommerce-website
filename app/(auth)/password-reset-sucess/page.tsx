"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function PasswordResetSuccess() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => router.push("/login"), 10000)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Password Reset Successful</CardTitle>
          <CardDescription className="text-center">Your password has been successfully reset</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <Alert className="mt-4">
            <AlertDescription>
              Your password has been successfully changed. You can now log in with your new password.
            </AlertDescription>
          </Alert>
          <p className="text-sm text-gray-500 mt-4">You will be redirected to the login page in 10 seconds...</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={() => router.push("/login")}>Go to Login</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

