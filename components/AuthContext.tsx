// context/AuthContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/lib/utils";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // wait for auth check

  const fetchUser = async () => {
    try {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        setUser(JSON.parse(savedUser)); // load from local storage
      } else {
        const res = await axios.get(`${BASE_URL}/api/users/authenticate`, {
          withCredentials: true,
        });
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data)); // store in local storage
      }
    } catch (err) {
      setUser(null);
      localStorage.removeItem("user"); // clear user on failure
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await axios.post(`${BASE_URL}/api/users/logout`, {}, { withCredentials: true });
    setUser(null);
    localStorage.removeItem("user"); // remove from localStorage on logout
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
