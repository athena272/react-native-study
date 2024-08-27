import { StyleSheet, Text } from "react-native";

type TitleProps = {
    text: string,
}

export default function Title({ text }: TitleProps) {
    return (
        <Text style={styles.title}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        color: '#f64348'
    }
})