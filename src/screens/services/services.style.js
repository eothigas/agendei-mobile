import {colors, font_size} from "../../constants/theme.js";

export const styles = {

    container: {
        backgroundColor: colors.white,
        flex: 1,
    },

    banner: {
        backgroundColor: colors.blue,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 25,
        paddingBottom: 25,
    },

    name: {
        fontSize: font_size.md,
        color: colors.white,
        fontWeight: "bold",
        marginTop: 5,
    },

    speciality: {
        fontSize: font_size.sm,
        color: colors.white,
        marginTop: 3,
    },

    text: {
        fontSize: font_size.lg,
        color: colors.gray1,
        marginBottom: 20,
        marginLeft: 20,
    },
}