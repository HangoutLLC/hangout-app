// Button.tsx
import React from 'react';
import { ActivityIndicator, Pressable, Text, Platform, ViewStyle, View } from 'react-native';
import { useTheme } from '@rneui/themed';

// define button types
type Size = 'sm' | 'md' | 'lg';
type Tone = 'primary' | 'secondary' | 'tertiary'
type Variant = 'tonal' | 'solid';

type ButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
  size?: Size;
  fullWidth?: boolean;
  style?: ViewStyle;
  tone?: Tone;
  variant?: Variant;
  disabled?: boolean;
  loading?: boolean;
};


// define constants
const TOUCH_MIN = Platform.OS === 'ios' ? 44 : 48;

const SIZE_MAP: Record<Size, { pv: number; ph: number; font: number; lh: number; radius: number }> = {
    sm: { pv: 8,  ph: 12, font: 13, lh: 18, radius: 8  },
    md: { pv: 12, ph: 16, font: 14, lh: 20, radius: 10 },
    lg: { pv: 16, ph: 20, font: 16, lh: 22, radius: 12 },
} as const;


export function Button({ 
    children,
    onPress,
    size='md',
    fullWidth=false,
    tone='primary',
    variant = 'tonal',
    disabled = false,
    loading = false,
    style
}: ButtonProps) {
    const { theme } = useTheme();
    const s = SIZE_MAP[size];
    let bg: string;
    let fg: string

    // determine background and foreground colors based on tone and variant
    if (variant === 'solid') {
        if (tone === 'primary') { bg = theme.colors.primary; fg = theme.colors.onPrimary; }
        else if (tone === 'secondary') { bg = theme.colors.secondary; fg = theme.colors.onSecondary; }
        else { bg = theme.colors.tertiary; fg = theme.colors.onTertiary; }
    } else {
        if (tone === 'primary') { bg = theme.colors.primaryContainer; fg = theme.colors.onPrimaryContainer; }
        else if (tone === 'secondary') { bg = theme.colors.secondaryContainer; fg = theme.colors.onSecondaryContainer; }
        else { bg = theme.colors.tertiaryContainer; fg = theme.colors.onTertiaryContainer; }
    }

    const [cachedWidth, setCachedWidth] = React.useState<number | undefined>(undefined);

    return (
        <Pressable
        accessibilityRole="button"
        accessibilityState={{ disabled, busy: loading }}
        disabled={disabled || loading}
        onPress={onPress}
        // update width cache when not loading
        onLayout={(e) => {
            if (!loading) setCachedWidth(e.nativeEvent.layout.width);
        }}
        style={({ pressed }) => [
            {
                backgroundColor: bg,
                padding: 10,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: s.pv,
                paddingHorizontal: s.ph,
                minHeight: Math.max(TOUCH_MIN, s.pv * 2 + s.font + 6),
                minWidth: loading && cachedWidth ? cachedWidth : undefined,
                opacity: disabled ? 0.5 : pressed ? 0.92 : 1,
                alignSelf: fullWidth ? 'stretch' : 'flex-start',
                width: fullWidth ? '100%' : undefined,
            },
            style,
        ]}
        >
            <Text style={{ 
                    color: fg,
                    fontWeight: '600',
                    fontSize: s.font,
                    lineHeight: s.lh,
                    opacity: loading ? 0 : 1,
            }}>
                {children}
            </Text>
            {loading && (
                // TODO: replace with themed spinner
                <View 
                    pointerEvents='none'
                    style={{
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                        alignItems: 'center', justifyContent: 'center',
                }}>
                    <ActivityIndicator color={fg}/>
                </View>
            )}
        </Pressable>
    );
}