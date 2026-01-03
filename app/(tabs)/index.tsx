import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { globalStyles } from '@/styles/global';
import { useFonts } from 'expo-font';
import { Image } from 'expo-image';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Bold: require('../../assets/fonts/Roboto-Black.ttf'),
    Regular: require('../../assets/fonts/Roboto-Regular.ttf'),
    Thin: require('../../assets/fonts/Roboto-Light.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={globalStyles.container} edges={['top', 'bottom']}>

      <ThemedView style={globalStyles.topTab}>
        <ThemedText style={[globalStyles.topTitle, { fontFamily: 'Bold' }]}>
          Home
        </ThemedText>

        <ThemedView style={[{ marginRight: 15 }]}>
          <Image
            source={require('../../assets/images/icon.png')}
            style={{ width: 24, height: 24 }}
            contentFit="cover"
            transition={1000}
          />
        </ThemedView>
      </ThemedView>

      <ThemedView style={globalStyles.main}>
        <ThemedText>
          Nenhum treino para hoje
        </ThemedText>
        <Button
          title="Adicionar Treinos"             // ✅ título do botão
          onPress={() => console.log('Botão pressionado')}
          color="#2563EB"                       // opcional
        />
      </ThemedView>
    
    </SafeAreaView>
  );
}
