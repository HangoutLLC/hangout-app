import React, { memo } from 'react';
import { View, Pressable, Platform} from 'react-native';
import { useTheme } from '@rneui/themed';
import { HangText } from '@/components/reusable/text/HangText';
import { Icon } from '@/components/reusable/icons/Icon';

type Size = 'sm' | 'md' | 'lg';

export type ListItemProps = {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  size?: Size;
  disabled?: boolean;
  style?: any;
  contentStyle?: any;
  testID?: string;
  onPress?: () => void;
  onLongPress?: () => void;
  selected?: boolean;
};

function BaseListItem({
  title,
  subtitle,
  leading,
  trailing,
  size = 'md',
  disabled = false,
  style,
  contentStyle,
  testID,
  onPress,
  onLongPress,
  selected,
}: ListItemProps) {
    const { theme } = useTheme();
    const t = theme.tokens.listItem;
    const isPressable = !!onPress && !disabled;
    const trailingNode = trailing ?? (isPressable ? <Icon name="chevronEnd" tone="muted" /> : null);
    const baseRowStyle = {
        minHeight: t.height[size],
        paddingHorizontal: t.paddingH[size],
        paddingVertical: t.paddingV[size],
        backgroundColor: theme.colors.surface,
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        borderRadius: t.radius,
    };

   if (isPressable) {
    const rippleColor = theme.colors.onSurfaceVariant; // simple, theme-based

    return (
        <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={disabled}
        android_ripple={{ color: rippleColor, borderless: false, foreground: true }}
        accessibilityRole="button"
        accessibilityState={{ disabled, selected }}
        accessibilityLabel={
            typeof title === 'string'
            ? `${title}${subtitle ? `. ${subtitle}` : ''}`
            : undefined
        }
        style={({ pressed }) => [
            baseRowStyle,
            { opacity: disabled ? 0.5 : pressed ? 0.92 : 1 },
            style,
        ]}
        testID={testID}
        >
        {/* Leading */}
        {leading ? (
            <View style={{ marginRight: t.gap, alignItems: 'center', justifyContent: 'center' }}>
            {leading}
            </View>
        ) : null}

        {/* Content (same as before) */}
        <View style={[{ flex: 1, minWidth: 0 }, contentStyle]}>
            {typeof title === 'string' ? (
            <HangText
                weight="medium"
                style={{ fontSize: t.titleSize[size], color: theme.colors.onSurface }}
                numberOfLines={1}
                ellipsizeMode="tail"
            >
                {title}
            </HangText>
            ) : (
            title
            )}

            {subtitle
            ? typeof subtitle === 'string'
                ? (
                <HangText
                    size="sm"
                    tone="muted"
                    style={{ fontSize: t.subtitleSize[size], color: theme.colors.onSurfaceVariant, marginTop: 2 }}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >
                    {subtitle}
                </HangText>
                )
                : subtitle
            : null}
        </View>

        {/* Trailing */}
        {trailingNode ? (
            <View style={{ marginLeft: t.gap, alignItems: 'center', justifyContent: 'center' }}>
            {trailingNode}
            </View>
        ) : null}
        </Pressable>
    );
    }

    // --- not pressable → keep your original static View wrapper ---
    return (
    <View
        testID={testID}
        accessibilityRole="text"
        accessibilityState={{ disabled }}
        style={[baseRowStyle, { opacity: disabled ? 0.5 : 1 }, style]}
    >
        {leading ? (
        <View style={{ marginRight: t.gap, alignItems: 'center', justifyContent: 'center' }}>
            {leading}
        </View>
        ) : null}

        <View style={[{ flex: 1, minWidth: 0 }, contentStyle]}>
        {typeof title === 'string' ? (
            <HangText
            weight="medium"
            style={{ fontSize: t.titleSize[size], color: theme.colors.onSurface }}
            numberOfLines={1}
            ellipsizeMode="tail"
            >
            {title}
            </HangText>
        ) : (
            title
        )}
        {subtitle
            ? typeof subtitle === 'string'
            ? (
                <HangText
                size="sm"
                tone="muted"
                style={{ fontSize: t.subtitleSize[size], color: theme.colors.onSurfaceVariant, marginTop: 2 }}
                numberOfLines={2}
                ellipsizeMode="tail"
                >
                {subtitle}
                </HangText>
            )
            : subtitle
            : null}
        </View>

        {trailingNode ? (
        <View style={{ marginLeft: t.gap, alignItems: 'center', justifyContent: 'center' }}>
            {trailingNode}
        </View>
        ) : null}
    </View>
    );
}

export const ListItem = memo(BaseListItem);