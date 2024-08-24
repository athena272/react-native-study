import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../../screens/HomeScreen"
import NavigationScreen from "../../screens/NavigationScreen"
import { RootStackParamList } from '../../types/RootStackParamList'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Home"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Navigation" component={NavigationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}