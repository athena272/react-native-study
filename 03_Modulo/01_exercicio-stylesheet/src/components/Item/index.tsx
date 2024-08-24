import { View, Text } from "react-native";

type ItemProps = {
    text: string,
    bgColor: string
}

export default function Item({ text, bgColor }: ItemProps) {
    return (
        <View style={{
            backgroundColor: bgColor,
            borderRadius: 16,
            marginTop: 16,
            marginRight: 16,
            padding: 16,
            width: '100%',
        }}>
            <Text style={{ fontWeight: '700' }}>{text}</Text>
        </View>
    )
}