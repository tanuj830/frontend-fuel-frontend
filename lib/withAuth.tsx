"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/components/AuthContext";
import Loader from "@/components/Loader";
import { supabase } from "./supabaseClient";

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
    if (loading) return <Loader/>; // Optional loader
    if (!user) return null; // user is null after loading, redirecting

    return <Component {...props} />;
  };
};

export default withAuth;