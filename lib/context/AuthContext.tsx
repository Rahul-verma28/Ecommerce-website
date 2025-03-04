"use client";

import { createContext, useContext, useEffect, useState , ReactNode} from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

interface AuthContextType {
  user: {
    wishlist(wishlist: any): unknown;
    image: any; name: string; email: string; id: string 
} | null;
}

const AuthContext = createContext<AuthContextType | null>(null);


export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();
  const [user, setUser] = useState<AuthContextType["user"]>(null);

  useEffect(() => {
    if (session?.user?.email) {
      axios
        .get(`/api/user?email=${session.user.email}`)
        .then((response) => {
          if (response.data.user) {
            setUser({
              name: response.data.user.name,
              email: response.data.user.email,
              id: response.data.user._id,
              image: response.data.user.image
            });
          }
        })
        .catch((error) => {
          console.error("Failed to fetch user:", error.response?.data?.error || error.message);
        });
    }
  }, [session]);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
