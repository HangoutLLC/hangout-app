import { Image } from 'expo-image';
import { Platform, StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';
import { Snackbar } from 'react-native-paper';

import HomescreenHeader from '@/components/HomescreenHeader';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import PersonalInsights from '@/components/personal-insights/PersonalInsights'
import { Button } from '@/components/reusable/button/Button';
import { HangText } from '@/components/reusable/text/HangText';
import { Alert } from '@/components/reusable/alert/alert';

export default function HomeScreen() {
      const  [visible, setVisible] = React.useState(true);
      const onToggleSnackBar = () => setVisible(!visible);
      const onDismissSnackBar = () => setVisible(false);
  return (
    <View /*style={styles.titleContainer}*/>
      <HomescreenHeader />
      <ScrollView
        /*style={styles.scrollView}*/
      >
        <Button onPress={() => console.log('Button Pressed!')} size='lg' variant='solid' tone='primary'>
          Press Me
        </Button>
        <ThemedView> 
          <HangText> normal test with a <HangText link onPress={() => {}}>link</HangText> embed </HangText>
        </ThemedView>
        <ThemedView> 
          <HangText variant='body'> Test Sizing </HangText>
        </ThemedView>
        <ThemedView> 
         <View>
        <Button
            onPress={onToggleSnackBar}
            size='md'
        >
            {visible ? 'Hide' : 'Show'} Alert 
        </Button>
        <Alert
            visible={visible}
            onDismiss={onDismissSnackBar}
            action={{
                label: 'Dismiss',
                onPress: onDismissSnackBar,
            }}
        >
                Lmao
        </Alert>
       </View>
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
