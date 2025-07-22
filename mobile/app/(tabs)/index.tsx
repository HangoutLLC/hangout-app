import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { UpcomingEvents } from "@/components/UpcomingEvents";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/idiots.gif")}
          style={styles.reactLogo}
        />
      }
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
      <UpcomingEvents
        events={[
          {
            id: "1",
            eventName: "React Native Meetup",
            eventDate: new Date("2023-11-15T22:00"),
            eventLocation: "Online",
            eventGroup: "React Native Community",
          },
          {
            id: "2",
            eventName: "Expo Workshop",
            eventDate: new Date("2023-11-20T10:00:00"),
            eventLocation: "Virtual",
            eventGroup: "Expo Team",
          },
        ]}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 220,
    width: 220,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
