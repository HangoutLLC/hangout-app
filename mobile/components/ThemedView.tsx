import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  variant?:
    | "background"
    | "surface"
    | "primaryContainer"
    | "secondaryContainer";
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  variant = "surface",
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor({}, variant);

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
