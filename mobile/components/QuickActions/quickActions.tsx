import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const actions = [
  { label: 'Plan Event', route: 'Plan Event' },
  { label: 'Ping Group', route: 'Ping Group' },
  { label: 'Upload Photos', route: 'Photos' },
  { label: 'Random Shit', route: 'Random Shit' },
];

export default function QuickActions() {
    // to be added later
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.subheader}>Quick Actions</Text>
      {[0, 2].map((rowIdx) => (
        <View style={styles.actionsRow} key={rowIdx}>
          {actions.slice(rowIdx, rowIdx + 2).map((action) => (
            <TouchableOpacity
              key={action.route}
              style={styles.button}
              onPress={() => alert(`nav to ${action.route}`)}
            >
              <Text style={styles.buttonText}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

// to be replaced later
const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    minWidth: 70,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});
