import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Abahome from "../abahome/abahome.jsx";
import Abacalendar from "../abacalendar/abacalendar.jsx";
import Abaprofile from "../abaprofile/abaprofile.jsx";
import icon from "../../constants/icon.js";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

function Main() {

    return <Tab.Navigator>
                <Tab.Screen name="Home" component={Abahome} options={{
                    headerTitleAlign: "center",
                    headerTitle: () => {
                        return <Image source={icon.logo} style={
                            {width: 125, height: 29}
                        }/>
                    },
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => {
                        return <Image source={icon.home} style={
                            {
                                width: 25, 
                                height: 25,
                                opacity: focused ? 1 : 0.3,
                            }
                        }/>
                    }
                }}/>

                <Tab.Screen name="Calendar" component={Abacalendar}options={{
                    headerTitleAlign: "center",
                    headerTitle: () => {
                        return <Image source={icon.logo} style={
                            {width: 125, height: 29}
                        }/>
                    },
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => {
                        return <Image source={icon.calendar} style={
                            {
                                width: 25, 
                                height: 25,
                                opacity: focused ? 1 : 0.3,
                            }
                        }/>
                    }
                }}/>

                <Tab.Screen name="Profile" component={Abaprofile}options={{
                    headerTitleAlign: "center",
                    headerTitle: () => {
                        return <Image source={icon.logo} style={
                            {width: 125, height: 29}
                        }/>
                    },
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => {
                        return <Image source={icon.profile} style={
                            {
                                width: 25, 
                                height: 25,
                                opacity: focused ? 1 : 0.3,
                            }
                        }/>
                    }
                }}/>

            </Tab.Navigator>


}

export default Main;