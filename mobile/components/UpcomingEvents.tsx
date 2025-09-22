import { StyleSheet, Pressable } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { router } from "expo-router";

import { useColorScheme } from "@/hooks/useColorScheme.web";

interface Event {
  id: string;
  name: string;
  status: "upcoming" | "ongoing" | "completed";
  visibility: "public" | "private";
  created_at: string;
  start_time?: string;
  location?: string;
  creater_id: string;
  group_id?: string;
}

interface UpcomingEventWidgetProps {
  event: Event;
}

function UpcomingEventWidget({ event }: UpcomingEventWidgetProps) {
  const eventTime: Date | undefined = event.start_time ? new Date(event.start_time) : undefined;


  const formatDateTime = (date?: Date) => {
    if(!date) return { dateStr: "Unknown", timeStr: "" };
    const dateStr = date.toLocaleDateString();
    const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return { dateStr, timeStr};
  };

  const { dateStr, timeStr } = formatDateTime(eventTime)

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/event/[id]" as any,
          params: {
            id: event.id,
            name: event.name || "",
            group_id: event.group_id || "",
            location: event.location || "",
            start_time: event.start_time ? new Date(event.start_time).toISOString() : "",
            creater_id: event.creater_id || "",
            status: event.status || "",
            visibility: event.visibility || "",
            created_at: event.created_at ? new Date(event.created_at).toISOString() : "",
          },
        })
      }
    >
      <ThemedView variant="primaryContainer" style={styles.container}>
        <ThemedText variant="onPrimaryContainer" style={styles.title}>
          {event.name || "No event scheduled"}
        </ThemedText>
        <ThemedText variant="onPrimaryContainer" style={styles.defaultText}>
          {event.group_id || "No group assigned"}
        </ThemedText>
        <ThemedText variant="onPrimaryContainer" style={styles.defaultText}>
          {event.location || "Unknown"}
        </ThemedText>
        <ThemedView variant="primaryContainer" style={styles.dateTimeRow}>
          <ThemedText variant="onPrimaryContainer" style={styles.defaultText}>
            {dateStr}
          </ThemedText>
          {timeStr && (
            <ThemedText
              variant="onPrimary"
              style={[styles.defaultText, styles.timeText]}
            >
              {timeStr}
            </ThemedText>
          )}
        </ThemedView>
      </ThemedView>
    </Pressable>
  );
}

interface UpcomingEventProps {
  events: Event[];
  maxEvents?: number;
}

export function UpcomingEvents({ events, maxEvents = 2 }: UpcomingEventProps) {
  const shownEvents = events.slice(0, maxEvents);
  return (
    <>
      <ThemedText variant="onBackground" style={styles.subtitle}>
        Upcoming Events
      </ThemedText>
      {shownEvents.map((event) => (
        <UpcomingEventWidget key={event.id} event={event} />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  defaultText: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
  dateTimeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeText: {
    fontWeight: "600",
  },
});
