import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../theme/colors';

export default function Index() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Home screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.pageArea.background,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: Colors.pageArea.text,
	},
	button: {
		fontSize: 20,
		textDecorationLine: 'underline',
		color: Colors.pageArea.text,
	},
});
