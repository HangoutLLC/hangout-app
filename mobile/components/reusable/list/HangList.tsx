import React from 'react';
import { View, FlatList, PixelRatio, type ListRenderItemInfo, type ListRenderItem } from 'react-native';
import { useTheme } from '@rneui/themed';

type HangListProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactElement | null;
  keyExtractor: (item: T, index: number) => string;
  showSeparators?: boolean;
  separatorInset?: number | 'auto';
};

export function HangList<T>({
    data,
    renderItem,
    keyExtractor,
    showSeparators = true,
    separatorInset = 'auto',
}: HangListProps<T>) {
  const { theme } = useTheme();
  const padH = theme.tokens.list.contentPadH.md;
  const padV = theme.tokens.list.contentPadV;
  const thickness = theme.tokens.list.separatorThickness ?? (StyleSheet as any).hairlineWidth ?? 1 / PixelRatio.get();

  const _renderItem: ListRenderItem<T> = ({ item, index }: ListRenderItemInfo<T>) =>
    renderItem(item, index) ?? null;

  const Separator = React.useCallback(() => {
    if (!showSeparators) return null;
    const left = 
        separatorInset === 'auto'
            ? theme.tokens.list.separatorIndentLeading
            : (separatorInset ?? 0);
    return (
        <View
            accessibilityElementsHidden
            importantForAccessibility='no'
            style={{
                height: thickness,
                marginLeft: left,
                backgroundColor: theme.colors.outlineVariant ?? theme.colors.outline,
            }}
        />
    );
  }, [showSeparators, separatorInset, thickness, theme])

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={_renderItem}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={{ paddingHorizontal: padH, paddingVertical: padV }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    />
  );
}