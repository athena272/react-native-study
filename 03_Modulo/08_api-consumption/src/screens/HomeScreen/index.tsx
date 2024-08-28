import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from '../../types/RootStackParamList';
import NavButton from '../../components/NavButton';
import Container from '../../components/Container';
import StyledTitle from '../../components/StyledTitle';

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

    const naviateToStyledComponentsScreen = () => {
        navigation.navigate('Styled')
    }

    const navigateToApiScreen = () => {
        navigation.navigate('ApisScreen')
    }

    return (
        <Container>
            <StyledTitle>Olá, mundo!</StyledTitle>
            <StatusBar style="auto" />
            <NavButton text='Aula de Navegação' onPress={navigateToNavigationScreen} />
            <NavButton text='Aula de ScrollView' onPress={navigateToScrollViewScreen} />
            <NavButton text='Aula de FlatList' onPress={navigateToFlatListScreen} />
            <NavButton text='Aula de Styled Components' onPress={naviateToStyledComponentsScreen} />
            <NavButton text='Aula de Consumo de APIs' onPress={navigateToApiScreen} />
        </Container>
    )
}