import { Image } from "expo-image";
import { Platform, StyleSheet, ScrollView, View } from "react-native";
import { Redirect } from "expo-router";

import HomescreenHeader from "@/components/HomescreenHeader";
import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import PersonalInsights from "@/components/personal-insights/PersonalInsights";
import { RequireAuth } from "@/components/AuthWrapper";
import { UpcomingEvents} from "@/components/UpcomingEvents";
import { useData } from "@/hooks/useData"
import { useAuth } from "@/components/AuthProvider";


export default function HomeScreen() {
  const { events, loading, error } = useData();
  const { user, session } = useAuth();
  console.log("Current User:", user);
  console.log("Session Info:", session);
  console.log("events:", events);
  return (
    <RequireAuth>
      <View /*style={styles.titleContainer}*/>
        <HomescreenHeader />
        <ScrollView
        /*style={styles.scrollView}*/
        >
        <ThemedView>
          <ThemedText> Component 1 </ThemedText>
        </ThemedView>
        <ThemedView>
          <ThemedText> Component 2 </ThemedText>
        </ThemedView>
        <ThemedView>
          <ThemedText> Component 3 </ThemedText>
        </ThemedView>
        <ThemedView>
          <ThemedText> Component 4 </ThemedText>
        </ThemedView>
        <UpcomingEvents events={events} />
      </ScrollView>
    </View>
    </RequireAuth>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingTop: 24,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
  },
});
