import { colors, font_size } from "../../constants/theme.js";

export const styles = {
    appointment: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 12,
        borderWidth: 1,
        borderColor: colors.gray4
    },
    name: {
        fontSize: font_size.md,
        color: colors.gray1,
        marginBottom: 2
    },
    speciality: {
        fontSize: font_size.sm,
        color: colors.gray3,
        marginBottom: 4
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 4
    },
    bookingDate: {
        fontSize: font_size.sm,
        color: colors.gray3,
        marginTop: 3
    },
    bookingHour: {
        fontSize: font_size.sm,
        color: colors.gray3,
        marginTop: 3
    },
    booking: {
        flexDirection: "row"
    },
    containerBooking: {
        flex: 1
    },
    containerButton: {
        marginTop: 5
    },
    container: {
        flexDirection: "row"
    }
}