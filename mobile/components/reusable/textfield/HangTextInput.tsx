// HangTextInput.tsx
import React from 'react';
import { View, TextInput, type TextInputProps } from 'react-native';
import { useTheme } from '@rneui/themed';
import { HangText } from '@/components/reusable/text/HangText';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type HangTextInputProps = TextInputProps & {
    disabled?: boolean;
    errorText?: string;
    helperText?: string;
    defaultErrorUntilTouched?: boolean;
    size?: Size;
};

// constants
const FIELD_WIDTH = {
  xs: 160,
  sm: 220,
  md: 280,
  lg: 360,
  xl: 440,
} as const;

export function HangTextInput({
    style,
    placeholderTextColor,
    onFocus,
    onBlur,
    disabled=false,
    errorText,
    helperText,
    defaultErrorUntilTouched=true,
    size='md',
    ...rest
}: HangTextInputProps) {
    const { theme } = useTheme();
    const [focused, setFocused] = React.useState(false);
    const [touched, setTouched] = React.useState(false);
    
    // default styles
    const w = FIELD_WIDTH[size]
    const baseStyle = {
        color: theme.colors.onSurface,
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.outline,
        borderWidth: 1,
        width: w,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 12,
        minHeight: 44,
    } as const;
    
    // if error, override styles
    const isError = !!(errorText && errorText.trim().length > 0);
    const showError = isError && (!defaultErrorUntilTouched || touched);

    const borderColor = showError
        ? theme.colors.error
        : focused
        ? theme.colors.primary
        : baseStyle.borderColor;

    // designate message from errorText or helperText
    const message = showError ? errorText : helperText;
    const messageColor = showError ? theme.colors.error : theme.colors.onSurfaceVariant;
  return (
    <View>
        <TextInput 
            {...rest}
            editable={!disabled}
            accessibilityState={{ disabled }}
            onFocus={(e) => { setFocused(true); onFocus?.(e); }}
            onBlur={(e) => { 
                setFocused(false);
                onBlur?.(e);
                setTouched(true);
            }}
            style={[
                baseStyle,
                { borderColor },
                disabled ? { opacity: 0.5 } : null,
                style,
            ]}
            placeholderTextColor={placeholderTextColor ?? theme.colors.onSurfaceVariant}
            selectionColor={theme.colors.primary}
        />

        {/* optional error text display */}
        {message ? (
            <HangText 
                size='sm'
                tone={showError ? 'default' : 'muted'}
                weight='regular'
                style={{
                    color: messageColor,
                    fontSize: 12,
                    lineHeight: 16,
                }}
                accessibilityLiveRegion='polite'
            >
                {message}
            </HangText> 
        ) : null}
    </View>
  );
}