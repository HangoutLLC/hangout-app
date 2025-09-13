// Icon.tsx
import React, { memo } from 'react';
import { useTheme } from '@rneui/themed';
import { MaterialIcons, Ionicons} from '@expo/vector-icons'
import { ICONS, type IconKey, type MatName, type IonName } from './registry'

// tone functionality
type IconTone = 
    | 'default'
    | 'muted'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'error'
    | 'inverse';

function resolveIconColor(theme: any, tone: IconTone) {
    switch (tone) {
        case 'primary':   return theme.colors.primary;
        case 'secondary': return theme.colors.secondary;
        case 'tertiary':  return theme.colors.tertiary;
        case 'error':     return theme.colors.error;
        case 'inverse':   return theme.colors.inverseOnSurface;
        case 'muted':     return theme.colors.onSurfaceVariant;
        default:          return theme.colors.onSurface;
    }
}

// icon props
type IconProps = {
    name: IconKey;
    size?: 'sm' | 'md' | 'lg';
    tone?: IconTone
    style?: any;
    testID?: string;
}

function IconBase({
    name,
    size='md',
    tone='default',
    style,
    testID
} : IconProps) {
    // initialize
    const { theme } = useTheme();
    const iconName = ICONS[name];
    if (!iconName) {
        if (__DEV__) console.warn(`Icon "${name}" not found in registry`);
        return null;
    }

    const s = theme.tokens.iconSizes[size];
    const color = resolveIconColor(theme, tone);

    // base props for MaterialIcons vs Ionicons
    const baseProps = {
        size: s,
        color,
        style,
        testID,
        accessibilityElementsHidden: true,
        importantForAccessibility: 'no' as const,
    };

    if (iconName.pack === 'MaterialIcons') {
        return <MaterialIcons {...baseProps} name={iconName.name as MatName} />;
    }
    return <Ionicons {...baseProps} name={iconName.name as IonName} />

}

export const Icon = memo(IconBase);