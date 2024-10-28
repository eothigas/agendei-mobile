import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from "../screens/main/main.jsx";

const Stack = createNativeStackNavigator();

function RoutesPrivate() {
    return <Stack.Navigator>
            <Stack.Screen name='main' component={Main} />
        </Stack.Navigator>
}

export default RoutesPrivate;