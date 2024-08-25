import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../types/RootStackParamList';

export default function HomeScreen() {
    // Tipar o useNavigation com o tipo correto
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const navigateToNavigationScreen = () => {
        navigation.navigate('Navigation')
    }

    const navigateToScrollViewScreen = () => {
        navigation.navigate('ScrollView')
    }

    const navigateToFlatListScreen = () => {
        navigation.navigate('FlatList')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, mundo!</Text>
            <StatusBar style="auto" />
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={navigateToNavigationScreen}
            >
                <Text style={styles.buttonText}>Aula de Navegação</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={navigateToScrollViewScreen}
            >
                <Text style={styles.buttonText}>Aula de ScrollView</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={navigateToFlatListScreen}
            >
                <Text style={styles.buttonText}>Aula de FlatList</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        color: '#f64348'
    },
    button: {
        backgroundColor: "#1c1a1d",
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    },
    buttonText: {
        color: "#FFFFFF",
    }
});