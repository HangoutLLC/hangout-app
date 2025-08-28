import React, { createContext, useContext } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  loading: true,
});

export function AuthProvider({}): {

    return (
    <AuthContext.Provider value= {{session, user: sessionStorage.user ?? null, loading}}>
    </AuthContext.Provider>)

};