"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthContext";

const withAuth = (Component: any) => {

   
  
  return function ProtectedComponent(props: any) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push("/sign-in");
      }
    }, [user, loading]);

    // 👉 Only block rendering if loading is true
    if (loading) return <div className="p-4">Checking session...</div>; // Optional loader
    if (!user) return null; // user is null after loading, redirecting

    return <Component {...props} />;
  };
};

export default withAuth;
