import { StyleSheet } from "react-native";

export const CardTodoStyle = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#fff",
        borderRadius: 15,
        height: 82,
        paddingVertical: 22,
        paddingHorizontal: 20,
        boxShadow: "#000",
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.25,
        elevation: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    cardTitleContainer:{
        maxWidth: 200
    },
    todoTitle: {
        color: "#9395D3",
        fontWeight: 800,
        fontSize: 16,
    },
    todoSubTitle: {
        fontSize: 12
    },
    todoIconsContainer: {
        flexDirection: "row",
        gap: 20
    }
});