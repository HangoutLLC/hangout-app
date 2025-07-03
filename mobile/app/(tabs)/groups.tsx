import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import GroupCard from '@/components/GroupCard';


const groups = [
  { id: 1, name: 'Hangout App Group', description: 'Discuss app progress and ideas' },
  { id: 2, name: 'Pals', description: 'The BEST friend group' },
  { id: 3, name: 'MAT 108', description: 'Plan study sessions' },
];

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Groups</ThemedText>
      </ThemedView>
      <ThemedText>View your current available hangout groups.</ThemedText>
      
      <ThemedView style={{ marginTop: 16 }}>
        <ThemedText type="title">Your Groups</ThemedText>
        {groups.map((group) => (
          <GroupCard
            key={group.id}
            name={group.name}
            description={group.description}
            onPress={() => console.log(`Clicked ${group.name}`)}
          />
        ))}
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
