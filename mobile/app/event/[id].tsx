import { useLocalSearchParams } from "expo-router";
import { Platform, StyleSheet, ScrollView } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function EventDetailPage() {
  const params = useLocalSearchParams<{
    id: string;
    eventName?: string;
    eventGroup?: string;
    eventLocation?: string;
    eventDate?: string;
  }>();

  // Parse the date if it exists
  const eventDate = params.eventDate ? new Date(params.eventDate) : null;

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">
          {params.eventName || "Event Details"}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.content}>
        <ThemedText type="subtitle">Event Information</ThemedText>

        <ThemedView style={styles.detailRow}>
          <ThemedText style={styles.label}>Event ID:</ThemedText>
          <ThemedText>{params.id}</ThemedText>
        </ThemedView>

        <ThemedView style={styles.detailRow}>
          <ThemedText style={styles.label}>Group:</ThemedText>
          <ThemedText>{params.eventGroup || "No group"}</ThemedText>
        </ThemedView>

        <ThemedView style={styles.detailRow}>
          <ThemedText style={styles.label}>Location:</ThemedText>
          <ThemedText>{params.eventLocation || "Unknown"}</ThemedText>
        </ThemedView>

        <ThemedView style={styles.detailRow}>
          <ThemedText style={styles.label}>Date & Time:</ThemedText>
          <ThemedText>
            {eventDate ? eventDate.toLocaleString() : "Unknown"}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#A1CEDC",
    padding: 24,
    paddingTop: 60, // Account for status bar
  },
  content: {
    padding: 16,
    gap: 16,
  },
  detailRow: {
    flexDirection: "column",
    gap: 4,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  label: {
    fontWeight: "600",
    fontSize: 14,
    opacity: 0.7,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
