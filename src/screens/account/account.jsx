import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from '../../assets/logo.png';
import {styles} from "./account.style.js";
import Button from "../../components/button/button.jsx"

function Account() {

    return <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={logo} style={styles.logo}/>
        </View>

        <View>
            <TextInput placeholder="Nome" style={styles.input}/>
            <TextInput placeholder="Email" style={styles.input}/>
            <TextInput placeholder="Senha" style={styles.input}
                secureTextEntry={true}/>
            <Button text="Criar Conta" />
        </View>

        <View style={styles.footer}>
            <Text style={styles.footer}>Já tenho conta. </Text>
            <TouchableOpacity>
                <Text style={styles.footerLink}>Fazer Login.</Text>
            </TouchableOpacity>
        </View>
    </View>

}

export default Account;