// alert.tsx
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useTheme } from '@rneui/themed';
import { HangText } from '@/components/reusable/text/HangText';
import { Snackbar, type SnackbarProps } from 'react-native-paper';
import { Button } from '@/components/reusable/button/Button';

// export type AlertProps = {
//     visible: boolean;
//     title: string;
//     message?: React.ReactNode;
//     onDismiss?: () => void;
// };
export type AlertProps = SnackbarProps;

export function Alert ({
    children,
    style,
    // visible, 
    // onDismiss,
    // // label,
    // // onPress,
    // message,
    ...rest
}: AlertProps) {
    const { theme } = useTheme();
    // const  [visible, setVisible] = React.useState(true);
    // const onToggleSnackBar = () => setVisible(!visible);
    // const onDismissSnackBar = () => setVisible(false);

    // if (!visible) return null;
    return (
        <Snackbar
            {...rest}
            style={[{ 
                backgroundColor: theme.colors.surfaceContainer, 
                borderRadius: 12 }, 
                style
            ]}
        >
            <HangText variant='body'>
                {children}
            </HangText>
        </Snackbar>
    )
}