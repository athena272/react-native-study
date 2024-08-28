import styled from "styled-components/native";
import { TextProps } from 'react-native';

interface StyledTitle extends TextProps {
    color?: string;
}

export default styled.Text<StyledTitle>`
    font-size: 40px;
    color: ${(props) => props.color ?? '#f64348'};
`