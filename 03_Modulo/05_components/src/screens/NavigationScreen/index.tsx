import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import NavButton from "../../components/NavButton";

export default function NavigationScreen() {
    const navigation = useNavigation()

    const navigateBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text>Aula de Navegação</Text>
            <NavButton text='Voltar'  onPress={navigateBack}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});