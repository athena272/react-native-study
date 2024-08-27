import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import NavButton from "../../components/NavButton";

export default function ScrollViewScreen() {
    const navigation = useNavigation()

    const navigateBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ScrollView</Text>
            <NavButton text='Voltar'  onPress={navigateBack}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.item}>
                    1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    consectetur corporis debitis natus rerum? Facere magni enim non hic
                    optio aliquid corporis modi repellat quod quos vero ut adipisci
                    exercitationem iure sed molestiae totam, maxime voluptatum ipsam a ad
                    inventore quae quis! Soluta quisquam odio magnam veniam, quae dicta
                    aliquam.
                </Text>
                <Text style={styles.item}>
                    2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    consectetur corporis debitis natus rerum? Facere magni enim non hic
                    optio aliquid corporis modi repellat quod quos vero ut adipisci
                    exercitationem iure sed molestiae totam, maxime voluptatum ipsam a ad
                    inventore quae quis! Soluta quisquam odio magnam veniam, quae dicta
                    aliquam.
                </Text>
                <Text style={styles.item}>
                    3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    consectetur corporis debitis natus rerum? Facere magni enim non hic
                    optio aliquid corporis modi repellat quod quos vero ut adipisci
                    exercitationem iure sed molestiae totam, maxime voluptatum ipsam a ad
                    inventore quae quis! Soluta quisquam odio magnam veniam, quae dicta
                    aliquam.
                </Text>
                <Text style={styles.item}>
                    4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    consectetur corporis debitis natus rerum? Facere magni enim non hic
                    optio aliquid corporis modi repellat quod quos vero ut adipisci
                    exercitationem iure sed molestiae totam, maxime voluptatum ipsam a ad
                    inventore quae quis! Soluta quisquam odio magnam veniam, quae dicta
                    aliquam.
                </Text>
                <Text style={styles.item}>
                    5 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    consectetur corporis debitis natus rerum? Facere magni enim non hic
                    optio aliquid corporis modi repellat quod quos vero ut adipisci
                    exercitationem iure sed molestiae totam, maxime voluptatum ipsam a ad
                    inventore quae quis! Soluta quisquam odio magnam veniam, quae dicta
                    aliquam.
                </Text>
                <Text style={styles.item}>
                    6 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    consectetur corporis debitis natus rerum? Facere magni enim non hic
                    optio aliquid corporis modi repellat quod quos vero ut adipisci
                    exercitationem iure sed molestiae totam, maxime voluptatum ipsam a ad
                    inventore quae quis! Soluta quisquam odio magnam veniam, quae dicta
                    aliquam.
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        marginHorizontal: 3,
        marginVertical: 32
    },
    title: {
        fontSize: 40,
        color: '#f64348'
    },
    item: {
        fontSize: 16,
        marginTop: 16
    },
})