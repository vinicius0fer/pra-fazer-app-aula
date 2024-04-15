import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from './src/screens/Login'
import CreateUser from './src/screens/CreateUser'

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">

                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

                <Stack.Screen name="CreateUser" component={CreateUser} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}