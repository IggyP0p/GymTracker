import { useFonts } from 'expo-font';
import { Image } from 'expo-image';
import { router } from 'expo-router'

import { Pressable } from 'react-native';
import { globalStyles } from '@/styles/global';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/ui/icon-symbol';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Bold: require('@/assets/fonts/Roboto-Black.ttf'),
    Regular: require('@/assets/fonts/Roboto-Regular.ttf'),
    Thin: require('@/assets/fonts/Roboto-Light.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={globalStyles.container} edges={['top', 'bottom']}>

      {/* Top tab */}
      <ThemedView style={globalStyles.topTab}>
        <ThemedText style={[globalStyles.topTitle, { fontFamily: 'Bold' }]}>
          Home
        </ThemedText>

        <ThemedView style={[{ 
          marginRight: 15, 
          flexDirection:'row', 
          backgroundColor: '#9CA3AF',
          gap: 20 }]}
        >
          <IconSymbol
            name='line.3.horizontal.decrease.circle'
            size={24}
            color="white"
          />
          <IconSymbol
            name='gearshape.fill'
            size={24}
            color="white"
          />
        </ThemedView>
      </ThemedView>


      {/* Main content */}
      <ThemedView style={globalStyles.main}>

        <Pressable 
          onPress={() => {setTimeout(() => {router.push('/addWorkout');}, 250);}}
          style={({ pressed }) => [globalStyles.Button, {backgroundColor: pressed ? '#d1d1d1ff' : '#FFFFFF',}]}
        >
          <ThemedText style={{ fontFamily: 'Regular', color: '#000000' }}>ADICIONAR TREINO</ThemedText>
        </Pressable>

      </ThemedView>
    
    </SafeAreaView>
  );
}
