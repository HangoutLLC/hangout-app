import { View, Text, useColorScheme } from 'react-native';
import { Stack } from 'expo-router'
import { useHeaderHeight } from '@react-navigation/elements';
import { lightTheme, darkTheme } from '@/constants/themes/colors';

export const options = {
    headerTransparent: true,
    headerBackTitleVisible: true,
    title: 'hello world',
}

export default function PersonalInsightsPage() {
    const headerHeight = useHeaderHeight();
    const colorScheme = useColorScheme() ?? 'light';
    const colors = colorScheme === 'dark' ? darkTheme : lightTheme;

    return (
        <>
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    title: '',
                    headerBackTitle: '',
                    headerBackButtonDisplayMode: 'minimal'
                }}
            />
        
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.surfaceContainer, paddingTop: headerHeight }}>
                <Text style={{color: colors.onSurface}}>Personal Insights</Text>
            </View>
        </>
    );
}