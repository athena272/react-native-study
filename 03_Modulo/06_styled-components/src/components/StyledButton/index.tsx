import styled from "styled-components/native";
import { TouchableOpacityProps, TextProps } from "react-native";

interface BackgroundProps extends TouchableOpacityProps {
    color: string;
}

interface TextoProps extends TextProps {
    color: string;
}

type StyledButtonProps = {
    bgColor: string
    color: string
    onPress: () => void
    children: React.ReactNode
}

const Background = styled.TouchableOpacity<BackgroundProps>`
  background-color: ${({ color }) => color ?? '#1c1a1d'};
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;
`

const Text = styled.Text<TextoProps>`
  color: ${({ color }) => color ?? '#fff'};
`

export default function StyledButton({ bgColor, color, onPress, children }: StyledButtonProps) {
    return (
        <Background color={bgColor} onPress={onPress}>
            <Text color={color}>
                {children}
            </Text>
        </Background>
    )
}