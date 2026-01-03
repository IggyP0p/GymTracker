import { Tabs } from 'expo-router';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useFonts } from 'expo-font';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    Bold: require('../../assets/fonts/Roboto-Black.ttf'),
    Regular: require('../../assets/fonts/Roboto-Regular.ttf'),
    Thin: require('../../assets/fonts/Roboto-Light.ttf'),
  });

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          height: 90,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabelStyle: {
            fontFamily: 'Thin',
            fontSize: 14,
          },
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'Stats',
          tabBarLabelStyle: {
            fontFamily: 'Thin',
            fontSize: 14,
          },
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="chart.bar.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="suggested"
        options={{
          title: 'Explore',
          tabBarLabelStyle: {
            fontFamily: 'Thin',
            fontSize: 14,
          },
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="magnifyingglass" color={color} />,
        }}
      />
      
    </Tabs>
  );
}
