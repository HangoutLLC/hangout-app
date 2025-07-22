import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Insight from './Insight';
import type {InsightProps} from './Insight'

const insights: InsightProps[] = [
    { type: 'attended', value: 12 },
    { type: 'bestFriend', value: 'John' },
    { type: 'streak', value: 6 },
];

const PersonalInsights = () => {
  return (
    <View style={styles.container}>
      {insights.map((insight, index) => (
        <Insight
          key={index}
          type={insight.type}
          value={insight.value}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 16,
    },
});

export default PersonalInsights;