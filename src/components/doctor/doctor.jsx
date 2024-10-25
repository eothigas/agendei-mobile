import { View, Image, TouchableOpacity, Text } from "react-native";
import {styles} from "./doctor.style.js";

function Doctor(props) {
    return <TouchableOpacity style={(styles.doctor)}>
    
        <Image source={props.icon} style={(styles.icon)}/>
    
        <View>
            <Text style={(styles.name)}>{props.name}</Text>
            <Text style={(styles.speciality)}>{props.speciality}</Text>
        </View>    
    </TouchableOpacity>
}

export default Doctor;