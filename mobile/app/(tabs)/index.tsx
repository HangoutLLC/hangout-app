import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { UpcomingEventWidget } from '@/components/UpcomingEvents';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/idiots.gif')}
          style={styles.reactLogo}
        />
      }>
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
      <UpcomingEventWidget
        eventName="Sample Event"
        eventDate={new Date()}
        eventLocation="Online"
        eventDescription="This is a sample event description."
        eventGroup="Sample Group"
      ></UpcomingEventWidget>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    position: 'absolute',
  },
});
