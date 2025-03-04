// "use client";

// import { Mail, Lock } from "lucide-react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";
// import { Button } from "@/components/ui/button";

// const Login = () => {
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const [error, setError] = useState("");
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (event: any) => {
//     const { name, value } = event.target;
//     return setUser((prevInfo) => ({ ...prevInfo, [name]: value }));
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       if (!user.email || !user.password) {
//         setError("please fill all the fields");
//         return;
//       }
//       const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
//       if (!emailRegex.test(user.email)) {
//         setError("invalid email id");
//         return;
//       }

//       const res = await signIn("credentials", {
//         email: user.email,
//         password: user.password,
//         redirect: false,
//       });

//       if (res?.error) {
//         console.log(res);
//         setError("error");
//       }

//       setError("");
//       router.push("/profile");
//     } catch (error) {
//       console.log(error);
//       setError("");
//     } finally {
//       setLoading(false);

//       setUser({
//         email: "",
//         password: "",
//       });
//     }
//   };
//   return (
//     <div
//       className="min-h-screen"
//       style={{
//         backgroundImage: `url("/background.png")`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="grid place-items-center mx-auto max-w-4xl w-full py-10 min-h-screen">
//         <div className="flex justify-center items-center lg:flex-row flex-col gap-6 lg:gap-0 w-full shadow-md rounded-2xl">
//           <div className="lg:w-1/2 w-full bg-[#5D7DF3]">
//             {/* <Image
//               src={bg}
//               alt="bg"
//               className="w-full h-full"
//               width={300}
//               height={300}
//             /> */}
//           </div>
//           <div className="lg:w-1/2 w-full flex flex-col justify-center items-center py-6 bg-[#eff1f6]">
//             <div className="rounded px-4 py-2 shadow bg-[#90a5ef]">
//               {/* <Image src={logo} alt="bg" width={100} height={100} /> */}
//             </div>
//             <div className="text-slate-900 font-medium text-xl py-5">
//               Hello! Welcome Back
//             </div>

//             <form
//               className="w-full px-5 py-6 space-y-6"
//               onSubmit={handleSubmit}
//             >
//               <div className="flex flex-col w-full lg:px-5">
//                 <label className="text-sm">Email</label>
//                 <div className="bg-white flex justify-start items-start py-3 px-4 rounded text-slate-600 text-lg mt-1">
//                   <Mail className="w-7 h-7 text-[#A1BDFD]" />
//                   <input
//                     type={"email"}
//                     placeholder="example@123.com"
//                     name="email"
//                     className="outline-none w-full px-4"
//                     value={user.email}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col w-full lg:px-5">
//                 <label className="text-sm">Password</label>
//                 <div className="bg-white flex justify-start items-start py-3 px-4 rounded text-slate-600 text-lg mt-1">
//                   <Lock className="w-7 h-7 text-[#A1BDFD]" />
//                   <input
//                     type={"password"}
//                     placeholder="**********"
//                     name="password"
//                     className="outline-none w-full px-4"
//                     value={user.password}
//                     onChange={handleInputChange}
//                   />
//                 </div>

//                 <div className="grid place-items-center w-full mx-auto pt-7">
//                   <button
//                     type="submit"
//                     className="bg-[#5D7DF3] text-white text-lg w-full px-8 py-3 rounded-md uppercase font-semibold"
//                   >
//                     Login
//                   </button>
//                 </div>
//                 <div className="flex justify-center w-full items-center gap-3 py-3">
//                   <div className="border-b border-gray-800 py-2 w-full px-6" />
//                   <div className="mt-3">or</div>
//                   <div className="border-b border-gray-800 py-2 w-full px-6" />
//                 </div>
//                 <div className="flex justify-center items-center w-full gap-8 pb-8">

//                   <div onClick={()=>signIn("google")} className="rounded px-6 py-2 shadow cursor-pointer bg-gray-50 grid place-items-center mx-auto mb-4">
//                     {/* <Image src={google} alt="bg" width={100} height={100} /> */}
//                     <Button>
//                       Sign in with Google
//                     </Button>
//                   </div>{" "}

//                 </div>
//                 <div className="text-lg text-slate-900 font-medium">
//                   <span>Don't have an account?</span>
//                   <a
//                     href="/signup"
//                     className="text-[#5D7DF3] pl-3 hover:underline"
//                   >
//                     Create an account
//                   </a>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { toast } from "sonner";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    return setUser((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!user.email || !user.password) {
        setError("Please fill all the fields");
        return;
      }
      const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      if (!emailRegex.test(user.email)) {
        setError("Invalid email id");
        return;
      }

      const res = await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false,
      });

      console.log(res);

      if (res?.error) {
        console.log(res);
        setError("Email or password is incorrect");
        return;
      }

      setError("");
      router.push("/");
      toast("Logged in successfully");
    } catch (error) {
      console.log(error);
      setError("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Welcome back</CardTitle>
            <CardDescription>Login with your Google account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div className="flex flex-col gap-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => signIn("google")}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        fill="currentColor"
                      />
                    </svg>
                    Login with Google
                  </Button>
                </div>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@123.com"
                      name="email"
                      value={user.email}
                      onChange={handleInputChange}
                      
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        href="forget-password"
                        className="ml-auto text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInputChange}
                      
                    />
                  {error && <div className="text-red-500">{error}</div>}
                  </div>
                  <Button type="submit" className="w-full bg-blue-400 hover:bg-blue-600" disabled={loading}>
                    {loading? "Logging in..." : "Login"}
                  </Button>
                </div>
                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/signup" className="underline underline-offset-4">
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
          By clicking continue, you agree to our{" "}
          <Link href="#">Terms of Service</Link> and <Link href="#">Privacy Policy</Link>.
        </div>
      </div>
    </div>
  );
};

export default Login;