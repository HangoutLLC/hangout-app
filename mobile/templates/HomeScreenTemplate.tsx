import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import  Sizes from '@/constants/Sizes';

// mock data
const mockData = [
  { id: '1', name: 'Example Item', detail: 'Sample detail text' },
];

export default function FeatureTemplate() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>[Feature Name]</Text>
      {/* Replace this with your feature content */}
    </View>
  );
}

// 📄 Styles
const styles = StyleSheet.create({
  container: {
    padding: Sizes.spacing.md,
    backgroundColor: Colors.background,
  },
  heading: {
    fontSize: Sizes.font.large,
    fontWeight: 'bold',
    marginBottom: Sizes.spacing.sm,
    color: Colors.text,
  },
});
