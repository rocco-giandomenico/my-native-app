import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../theme/colors';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Page not fond!...0' }} />
            <View style={styles.container}>
                <Text style={styles.text}>Oops! Not Found</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.pageArea.backgrond,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: Colors.pageArea.text
    },
});
