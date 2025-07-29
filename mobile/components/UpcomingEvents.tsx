import { StyleSheet, Pressable } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { router } from "expo-router";

import { useColorScheme } from "@/hooks/useColorScheme.web";

interface Event {
  id: string;
  eventName?: string;
  eventDate?: Date;
  eventLocation?: string;
  eventGroup?: string;
}

interface UpcomingEventWidgetProps {
  event: Event;
}

function UpcomingEventWidget({ event }: UpcomingEventWidgetProps) {
  const formatDateTime = (date: Date) => {
    const dateStr = date.toLocaleDateString();
    const timeStr = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return { dateStr, timeStr };
  };

  const { dateStr, timeStr } = event.eventDate
    ? formatDateTime(event.eventDate)
    : { dateStr: "Unknown", timeStr: "" };

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/event/[id]" as any,
          params: {
            id: event.id,
            eventName: event.eventName || "",
            eventGroup: event.eventGroup || "",
            eventLocation: event.eventLocation || "",
            eventDate: event.eventDate ? event.eventDate.toISOString() : "",
          },
        })
      }
    >
      <ThemedView variant="primaryContainer" style={styles.container}>
        <ThemedText variant="onPrimary" style={styles.title}>
          {event.eventName || "No event scheduled"}
        </ThemedText>
        <ThemedText variant="onPrimary" style={styles.defaultText}>
          {event.eventGroup || "No group assigned"}
        </ThemedText>
        <ThemedText variant="onPrimary" style={styles.defaultText}>
          {event.eventLocation || "Unknown"}
        </ThemedText>
        <ThemedView variant="primaryContainer" style={styles.dateTimeRow}>
          <ThemedText variant="onPrimary" style={styles.defaultText}>
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
