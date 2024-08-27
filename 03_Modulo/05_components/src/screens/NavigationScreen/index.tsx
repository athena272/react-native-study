import { useNavigation } from "@react-navigation/native";
import NavButton from "../../components/NavButton";
import Container from "../../components/Container";
import Title from "../../components/Title";

export default function NavigationScreen() {
    const navigation = useNavigation()

    const navigateBack = () => {
        navigation.goBack()
    }

    return (
        <Container>
            <Title text="Aula de Navegação"/>
            <NavButton text='Voltar'  onPress={navigateBack}/>
        </Container>
    );
}