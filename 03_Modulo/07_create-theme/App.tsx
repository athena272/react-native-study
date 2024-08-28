import StackNavigator from "./src/components/StackNavigator";
import { ThemeProvider } from "styled-components";
import { useFonts } from "expo-font";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";
import { View } from "react-native";

const theme = {
  colors: {
    red: '#F64348',
    dark: '#1C1A1D',
    light: '#EAEAEA'
  },
  fonts: {
    roboto700: 'Roboto_700Bold'
  }
}

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({ roboto: Roboto_700Bold })
  console.log("🚀 ~ App ~ fontsLoaded:", fontsLoaded)

  // esconde a SplashScreen assim que fontsLoaded for modificado,
  // ou seja, quando a fonte for carregada
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null // impede a renderização até que a fonte carregue
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        <StackNavigator />
      </ThemeProvider>
    </View>
  );
}