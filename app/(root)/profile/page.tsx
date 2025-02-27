"use client";

import { useAuth } from "@/lib/context/AuthContext";
import { signOut } from "next-auth/react";
import React from "react";

const Profile = () => {
  const authContext = useAuth();
  const user = authContext ? authContext.user : null;

  return (
    <div className="min-h-screen py-20">
      <div className="w-full max-w-2xl grid place-items-center mx-auto py-40 gap-6 bg-slate-50">
        <span className="text-4xl tracking-wide font-semibold capitalize text-[#5D7DF3]">
          Welcome to the Profile
        </span>

        {user ? (
          <>
            <span className="text-2xl tracking-normal py-10 font-semibold">
              {user.name}
            </span>
            <span className="text-lg">{user.email}</span>
            <span className="text-lg">User ID: {user.id}</span>
          </>
        ) : (
          <p>Loading user data...</p>
        )}

        <button
          onClick={() => signOut()}
          className="bg-slate-950 text-white rounded text-lg w-auto px-6 py-3 uppercase"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
