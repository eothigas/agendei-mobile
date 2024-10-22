import {colors, font_size} from "../../constants/theme.js";

export const styles = {

    container: {
        backgroundColor: colors.white,
        flex: 1,
        padding: 50,
        justifyContent: "space-between"
    },

    containerLogo: {
        alignItems: "center"
    },

    logo: {
        width: 200,
        height: 46,
    },

    input: {
        backgroundColor: colors.gray5,
        padding: 10,
        borderRadius: 6,
        marginBottom: 15
    },

    footer: {
        flexDirection: "row",
        justifyContent: 'center',
        fontSize: font_size.lg
    },

    footerLink: {
        fontSize: font_size.lg,
        color: colors.blue,
    }
}