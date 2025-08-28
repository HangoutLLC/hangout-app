import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Auth from "@/components/Auth";
import { Redirect, router } from "expo-router";
import { View, Text } from "react-native";
import { useAuth } from "@/components/AuthProvider";

export default function Login() {
  const {session, user, loading} = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
        <Text style={{ color: "#222", fontSize: 18 }}>Loading...</Text>
      </View>
    );
  }
  if (session && user) {
    return <Redirect href = "/(tabs)" />;
  } else {
    return (
      <View>
        <Auth />
      </View>
    );
  }
}
