import { Image } from 'expo-image';
import { Platform, StyleSheet, ScrollView, View } from 'react-native';

import HomescreenHeader from '@/components/HomescreenHeader';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
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
      </ScrollView>
    </View>
  );
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flex: 1,
//     alignItems: 'center',
//     gap: 8,
//     paddingHorizontal: 16,
//     paddingTop: 24,
//     backgroundColor: '#F5F5F5',
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: '#E3F2FD',
//     borderRadius: 12,
//     padding: 12,
//     marginTop: 8,
//   },
// });
