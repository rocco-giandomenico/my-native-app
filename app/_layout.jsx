import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Image, StatusBar, TouchableOpacity, View } from 'react-native';
import Colors from '../theme/colors';

export default function RootLayout() {

	const router = useRouter();

	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor={Colors.statusBar.background} />
			<View style={
				{
					height: 60,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					paddingHorizontal: 15,
					backgroundColor: Colors.greenArea.background
				}
			}>
				<Image 
					source={require('../assets/images/g1.png')} 
					style={
						{ 
							height: 25,
							width: 110,
							resizeMode: 'contain'
						}
					} />

				<View style={{ flexDirection: 'row', gap: 20 }}>
					<TouchableOpacity onPress={() => router.navigate('/notifications')}>
						<Ionicons name="notifications-outline" size={24} color="white" />
					</TouchableOpacity>

					<TouchableOpacity onPress={() => router.navigate('/gamification')}>
						<Ionicons name="game-controller-outline" size={24} color="white" />
					</TouchableOpacity>
				</View>

			</View>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
			</Stack>
		</>
	);
}