import { StyleSheet, TouchableOpacity, Text } from "react-native";

type NavButtonProps = {
    text: string,
    onPress: () => void
}

export default function NavButton({ text, onPress }: NavButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#1c1a1d",
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    },
    buttonText: {
        color: "#FFFFFF",
    }
})