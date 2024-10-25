import {colors, font_size} from "../../constants/theme.js";

export const styles = {

    service: {
        backgroundColor: colors.white,
        flex: 1,
        flexDirection: "row",
        padding: 12,
        borderWidth: 1,
        borderColor: colors.gray4,
    },

    containerText: {
        flex: 1,
    },

    containerButton: {
        marginTop: 5,
    },

    description: {
        fontSize: font_size.md,
        color: colors.gray3,
        fontWeight: "bold",
        marginTop: 5,
    },

    price: {
        fontSize: font_size.sm,
        color: colors.blue,
        marginTop: 3,
    }
}
