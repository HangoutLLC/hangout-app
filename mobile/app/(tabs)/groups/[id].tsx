import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function GroupDetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Group Details</Text>
      <Text style={{ fontSize: 18 }}>Group ID: {id}</Text>
    </View>
  );
}
