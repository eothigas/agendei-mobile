import {colors, font_size} from "../../constants/theme.js";

export const styles = {

    container: {
        backgroundColor: colors.white,
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        marginBottom: 20,
        justifyContent: "space-between",
    },

    theme: {
        todayTextColor: colors.red,
        selectedDayBackgroundColor: colors.blue,
        selectedDayTextColor: colors.white,
        arrowColor: colors.blue,
    },

    textHour: {
        fontSize: font_size.lg,
        fontWeight: "bold",
        color: colors.gray2,
        marginTop: 20,
    }
}