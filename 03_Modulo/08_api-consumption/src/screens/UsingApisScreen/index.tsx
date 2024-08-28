import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text } from "react-native";
import StyledContainer from "../../components/StyledContainer";
import StyledTitle from "../../components/StyledTitle";
import StyledButton from "../../components/StyledButton";

type UserApi = {
    name: string,
    bio: string,
    avatar_url: string,
}

export default function UsingApisScreen() {
    const [user, setUser] = useState<UserApi | null>(null)
    const navigation = useNavigation()

    const navigateBack = () => {
        navigation.goBack()
    }

    const fetchGithubUser = async () => {
        const res = await axios.get('https://api.github.com/users/julianaconde')
        setUser(res.data)
    }

    useEffect(() => {
        fetchGithubUser()
    }, [])

    if(!user) {
        return (
            <Text>Loading...</Text>
        )
    }

    return (
        <StyledContainer>
            <StyledTitle>Consumindo APIs</StyledTitle>
            <Text style={styles.text}>{user.name}</Text>
            <Text>{user.bio}</Text>
            <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
            <StyledButton onPress={navigateBack}>Voltar</StyledButton>
        </StyledContainer>
    )
}

const styles = StyleSheet.create({
    avatar: {
        alignSelf: 'center',
        borderRadius: 999,
        height: 200,
        width: 200,
        marginVertical: 20
    },
    text: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center'
    }
})