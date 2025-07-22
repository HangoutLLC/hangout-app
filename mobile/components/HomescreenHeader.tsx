import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HomescreenHeaderProps {
    title?: string;
    onProfilePress?: () => void;
    onNotificationsPress?: () => void;
}

const HomescreenHeader: React.FC<HomescreenHeaderProps> = ({
    title = 'Home',
    onProfilePress,
    onNotificationsPress,
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onProfilePress}>
                <Ionicons name="person-circle-outline" size={32} color="#333" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onNotificationsPress}>
                <Ionicons name="notifications-outline" size={28} color="#333" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default HomescreenHeader;