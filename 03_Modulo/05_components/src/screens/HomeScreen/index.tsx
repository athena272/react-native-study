import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../types/RootStackParamList';
import NavButton from '../../components/NavButton';

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
            <NavButton text='Aula de Navegação' onPress={navigateToNavigationScreen}/>
            <NavButton text='Aula de ScrollView' onPress={navigateToScrollViewScreen}/>
            <NavButton text='Aula de FlatList' onPress={navigateToFlatListScreen}/>
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
    }
});