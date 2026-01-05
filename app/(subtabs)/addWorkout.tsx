import { useFonts } from 'expo-font';
import { Image } from 'expo-image';
import { router } from 'expo-router'

import { Pressable } from 'react-native';
import { globalStyles } from '@/styles/global';
import { AddWorkoutMenu } from '@/styles/addWorkout';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/ui/icon-symbol';

export default function workouts() {

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

                <ThemedView style={[{ 
                    flexDirection: 'row', 
                    alignItems: 'flex-start',
                    backgroundColor: '#9CA3AF'
                    }]}
                >

                    <Pressable 
                        onPress={() => {router.back()}}
                        style={[{marginLeft: 15}]}
                    >
                        <IconSymbol
                            name='arrow.left'
                            size={32}
                            color="black"
                        />
                    </Pressable>
                    
                    <ThemedText style={[globalStyles.topTitle, { fontFamily: 'Bold' }]}>
                        Workouts
                    </ThemedText>

                </ThemedView>

            </ThemedView>

            {/* Main content */}
            <ThemedView style={globalStyles.main}>
                <Pressable style={AddWorkoutMenu.options}>
                    <ThemedText> Create your own workout </ThemedText>
                </Pressable>

                <Pressable style={AddWorkoutMenu.options}>
                    <ThemedText> Default: Get one Workout from gallery </ThemedText>
                </Pressable>
            </ThemedView>

            
        </SafeAreaView>
    );
}