import styled from 'styled-components/native'
import { ViewProps } from 'react-native';

interface StyledContainerProps extends ViewProps {
  theme: {
    colors: {
      red: string,
      dark: string,
      light: string
    },
  }
}

export default styled.View<StyledContainerProps>`
  flex: 1;
  margin: 32px 0 0;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.red ?? '#fff'};
`