import {colors, font_size} from "../../constants/theme.js";

export const styles = {

    doctor: {
        backgroundColor: colors.white,
        flex: 1,
        padding: 8,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.gray4,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 6
    },

    icon: {
        width: 50,
        height: 50,
        marginRight: 8
    },

    name: {
        color: colors.gray1,
        fontSize: font_size.md,
        marginTop: 5,
    },

    speciality: {
        color: colors.gray3,
        fontSize: font_size.sm,
    }
}