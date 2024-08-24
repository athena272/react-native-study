import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../Pages/Home";
import Settings from "../Pages/Settings";

type IconName = "home" | "menuunfold"

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName: IconName; // valor padrão ou ícone de fallback

                        if (route.name === "Home") {
                            iconName = "home";
                        } else if (route.name === "Settings") {
                            iconName = "menuunfold";
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    headerShown: false,
                    tabBarActiveTintColor: '#FF0044',
                    tabBarInactiveTintColor: '#BBB',
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Setting" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}