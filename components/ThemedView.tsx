import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ className, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  return <View className={className} {...otherProps} />;
}
