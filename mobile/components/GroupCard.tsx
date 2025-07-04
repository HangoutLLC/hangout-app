import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type GroupCardProps = {
  id: number;
  name: string;
  description: string;
  onPress?: () => void;
};

export default function GroupCard({ name, description, onPress }: GroupCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#6A2686',
  },
});
