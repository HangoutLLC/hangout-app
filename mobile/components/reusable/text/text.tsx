import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@rneui/themed';

type TextProps = {
  children: React.ReactNode;
  style?: object;
};

export function ThemedText({ children, style }: TextProps) {
  const { theme } = useTheme();

  return (
    <Text style={[{ color: theme.colors.text }, style]}>
      {children}
    </Text>
  );
}