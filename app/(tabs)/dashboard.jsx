import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../theme/colors';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.pageArea.backgrond,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.pageArea.text
    },
});
