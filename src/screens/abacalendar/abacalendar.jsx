import { FlatList, Text, View } from "react-native";
import {styles} from "./abacalendar.style.js";
import {appointments} from "../../constants/data.js";
import icon from "../../constants/icon.js";
import Appointment from "../../components/appointment/appointment.jsx";

function AbaCalendar() {

    return <View style={(styles.container)}>

        <FlatList data={appointments} 
            keyExtractor={(appoint) => appoint.id_appointment} 
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <Appointment service={item.service}
                                    doctor={item.doctor}
                                    speciality={item.speciality} />
            }} />
    </View>
}

export default AbaCalendar;