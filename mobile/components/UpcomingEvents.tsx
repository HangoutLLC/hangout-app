import { StyleSheet } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

interface UpcomingEventWidgetProps {
    eventName?: string;
    eventDate?: Date;
    eventLocation?: string;
    eventDescription?: string;
    eventGroup?: string;
}

export function UpcomingEventWidget({
    eventName,
    eventDate,
    eventLocation,
    eventDescription,
    eventGroup
}: UpcomingEventWidgetProps ) {
    return (
        <ThemedView style={styles.container}>
            <ThemedText>
                Upcoming Event: {eventName || 'No event scheduled'}
            </ThemedText>
            <ThemedText>
                Event Date: {eventDate ? eventDate.toLocaleDateString() : 'Unknown'}
            </ThemedText>
            <ThemedText>
                Location: {eventLocation || 'Unknown'}
            </ThemedText>
            <ThemedText>
                Description: {eventDescription || 'No description available'}
            </ThemedText>
            <ThemedText>
                Group: {eventGroup || 'No group assigned'}
            </ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#6d22b8ff',
        borderRadius: 8,
        marginVertical: 8,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
});