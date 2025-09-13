import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { useAuth } from "@/components/AuthProvider"

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const {session, loading} = useAuth();
  if (loading) return null;
  if (!session) return <Redirect href="/login" />;
  return <>{children}</>;
}