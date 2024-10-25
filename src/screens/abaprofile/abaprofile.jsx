import { View, Text } from "react-native";
import {styles} from "./abaprofile.js";

function Abaprofile() {

    return <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.title}>Nome</Text>
            <Text style={styles.text}>Thiago Freitas</Text>
        </View>

        <View style={styles.item}>
            <Text style={styles.title}>E-mail</Text>
            <Text style={styles.text}>thiago@teste.com</Text>
        </View>

    </View>

}

export default Abaprofile;