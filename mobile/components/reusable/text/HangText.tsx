// HangText.tsx
import React from 'react';
import { Text, type TextProps, type TextStyle } from 'react-native';
import { useTheme } from '@rneui/themed';

// define HangText types
type Tone = 'default' | 'muted' | 'inverse';
type Size = 'sm' | 'md' | 'lg';
type Weight = 'regular' | 'medium' | 'bold';
type Truncate = boolean | number;
type Variant = 'body' | 'label' | 'title'; // allow user to specify text variant

export type HangTextProps = TextProps & {
  tone?: Tone;
  size?: Size;
  weight?: Weight;
  truncate?: Truncate;
  link?: boolean;
  variant?: Variant;
}

// define typeography constants
const SIZE: Record<Size, { fontSize: number; lineHeight: number }> = {
  sm: { fontSize: 14, lineHeight: 20 },
  md: { fontSize: 16, lineHeight: 24 },
  lg: { fontSize: 20, lineHeight: 28 },
}

const WEIGHT: Record<Weight, TextStyle['fontWeight']> = {
  regular: '400',
  medium: '500',
  bold: '700',
};

const VARIANT: Record<Variant, { size: Size, weight: Weight }> = {
  body: { size: 'md', weight: 'regular' },
  label: { size: 'sm', weight: 'medium' },
  title: { size: 'lg', weight: 'bold' },
};

export function HangText({
  style,
  tone='default',
  size,
  weight,
  truncate,
  link,
  variant,
  accessibilityRole,
  ...rest
}: HangTextProps) {
  const { theme } = useTheme();

  // generate color
  const baseColor = 
    tone === 'inverse'
      ? theme.colors.inverseOnSurface
      : tone === 'muted'
      ? theme.colors.onSurfaceVariant
      : theme.colors.onSurface;
  
  const color = link ? theme.colors.primary : baseColor;

  // determine size and weight
  const sizeWeightKey = variant ? VARIANT[variant] : undefined;
  const derSize: Size = size ?? sizeWeightKey?.size ?? 'md';
  const derWeight: Weight = weight ?? sizeWeightKey?.weight ?? 'regular';

   // define font family
  const family = 
    theme.typography?.family[derWeight] ??
    theme.typography?.family.regular ??
    undefined;
  
  const s = SIZE[derSize];
  const numberOfLines =
    truncate === true ? 1 : typeof truncate === 'number' ? truncate : undefined;

  return (
    <Text
      {...rest}
      accessibilityRole={link ? 'link' : 'text'}
      numberOfLines={numberOfLines}
      ellipsizeMode={numberOfLines ? 'tail' : undefined}
      style={[
        numberOfLines ? { flexShrink: 1, minWidth: 0 } : null,
        { 
          color,
          fontSize: s.fontSize,
          lineHeight: s.lineHeight,
          fontWeight: WEIGHT[derWeight],
          fontFamily: family,
        }, 
        style,
      ]}
    />
  );
}


