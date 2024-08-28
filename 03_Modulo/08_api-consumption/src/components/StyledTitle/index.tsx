import styled from "styled-components/native";
import { TextProps } from 'react-native';

interface StyledTitle extends TextProps {
    theme: {
        colors: {
            red: string,
            dark: string,
            light: string
        },
        fonts: {
            roboto700: string
        }
    }
}

export default styled.Text<StyledTitle>`
    font-size: 40px;
    color: ${(props) => props.theme.colors.dark};
    font-family: ${({ theme }) => theme.fonts.roboto700};
`