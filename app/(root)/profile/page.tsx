"use client";

import { useAuth } from "@/lib/context/AuthContext";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Profile = () => {
  const authContext = useAuth();
  const user = authContext ? authContext.user : null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Profile</CardTitle>
          </CardHeader>
          <CardContent>
            {user ? (
              <div className="grid gap-6">
                <div className="flex flex-col items-center gap-4">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                  <span className="text-xl font-semibold">{user.name}</span>
                  <span className="text-lg">{user.email}</span>
                  <span className="text-lg">User ID: {user.id}</span>
                </div>
                <Button
                  onClick={() => signOut()}
                  className="w-full"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <p>Loading user data...</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;