import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { InsightMessages } from '@/constants/InsightMessages';

export interface InsightProps {
    type: 'attended' | 'bestFriend' | 'streak';
    value: any;
    onPress?: () => void;
  }

const Insight: React.FC<InsightProps> = ({ type, value, onPress }) => {
    const message = InsightMessages[type] || { primaryLabel: '', secondaryLabel: '' };
    const primaryValue = value;
    const primaryLabel = message.primaryLabel;
    const secondaryLabel = message.secondaryLabel;
        

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