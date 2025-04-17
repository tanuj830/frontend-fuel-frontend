"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/ui/sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState(`console.log("Hello from iframe!");`);

  return (
    <div className="w-full">
<Navbar/>
    </div>
  );
}
