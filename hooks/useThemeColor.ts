/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/Colors';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

/**
 * 
 * @param type 
 */ 
export function colorBorderTheme(type: 'error' | 'warning' | 'success' | 'primary')
{
  switch (type) {
    case 'error':
      return 'border-l-red-500';
    case 'warning':
      return 'border-l-yellow-500';
    case 'success':
      return 'border-l-green-500';
    case 'primary':
    default:
      return 'border-l-blue-500';
  }
}
