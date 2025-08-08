import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { InsightMessages } from '@/constants/InsightMessages';
import { useRouter } from 'expo-router';
// import { lightTheme, darkTheme, ThemeColors } from '@/constants/themes/colors';
import { useColorScheme } from 'react-native';

export interface InsightProps {
    type: 'attended' | 'bestFriend' | 'streak';
    value: any;
    onPress?: () => void;
}

// function createStyles(colors: ThemeColors){
//     return StyleSheet.create({
//         container: {
//             backgroundColor: colors.surfaceContainer,
//             borderRadius: 8,
//             padding: 12,
//             margin: 4,
//             alignItems: 'center',
//             justifyContent: 'center',
//             width: '30%',
//         },
//         primaryValue: {
//             fontSize: 28,
//             fontWeight: 'bold',
//             color: colors.onSurface,
//         },
//         primaryLabel: {
//             fontSize: 14,
//             color: colors.onSurfaceVariant,
//         },
//         secondaryLabel: {
//             fontSize: 12,
//             color: colors.outline,
//         },
//     });
// }

const Insight: React.FC<InsightProps> = ({ type, value, onPress }) => {
    const message = InsightMessages[type] || { primaryLabel: '', secondaryLabel: '' };
    const primaryValue = value;
    const primaryLabel = message.primaryLabel;
    const secondaryLabel = message.secondaryLabel;

    // const colorScheme = useColorScheme() ?? 'light';
    // const colors = colorScheme === 'dark' ? darkTheme : lightTheme;
    // const styles = createStyles(colors);

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.primaryValue}>{primaryValue}</Text>
            <Text style={styles.primaryLabel}>{primaryLabel}</Text>
            {secondaryLabel && (
                <Text style={styles.secondaryLabel}>{secondaryLabel}</Text>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#444',
        borderRadius: 8,
        padding: 12,
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
    },
    primaryValue: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
    primaryLabel: {
        fontSize: 14,
        color: '#ccc',
    },
    secondaryLabel: {
        fontSize: 12,
        color: '#999',
    },
});

export default Insight;