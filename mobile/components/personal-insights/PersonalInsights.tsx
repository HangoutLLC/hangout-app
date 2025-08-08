import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import Insight from './Insight';
import type { InsightProps } from './Insight'
import { useRouter } from 'expo-router'
// import { lightTheme, darkTheme } from '@/constants/themes/colors';

const insights: InsightProps[] = [
    { type: 'attended', value: 12 },
    { type: 'bestFriend', value: 'John' },
    { type: 'streak', value: 6 },
];

// function createStyles(colors: { [key: string]: string }) {
//   return StyleSheet.create({
//       container: {
//           flexDirection: 'row',
//           flexWrap: 'wrap',
//           backgroundColor: colors.background,
//           justifyContent: 'space-around',
//           marginTop: 16,
//       },
//   });
// }

const PersonalInsights = () => {
  // const colorScheme = useColorScheme() ?? 'light';
  // const colors = colorScheme === 'dark' ? darkTheme : lightTheme;
  // const styles = createStyles(colors)

  const router = useRouter();

  const insightPress = () => {
    router.push('/personal-insights');
  };


  return (
    <View style={styles.container}>
      {insights.map((insight, index) => (
        <Insight
          key={index}
          type={insight.type}
          value={insight.value}
          onPress={insightPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: colors.background,
        justifyContent: 'space-around',
        marginTop: 16,
    },
});

export default PersonalInsights;