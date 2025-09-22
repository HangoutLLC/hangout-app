import { useState, useEffect } from "react";
import { useAuth } from "@/components/AuthProvider";

export function useData() {
  const { session } = useAuth();
  const [events, setEvents] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      setError(null);
      try {
        const jwt = session?.access_token;
        const response = await fetch("http://localhost:8080/user-data", {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch user data");
        const { user, events } = await response.json();
        setUser(user)
        setEvents(events);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    if (session) fetchEvents();
  }, [session]);
  return { events, loading, error };
}
