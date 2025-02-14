import { Dimensions, StyleSheet } from 'react-native'

const { height } = Dimensions.get("window");

export const stylesHome = StyleSheet.create({
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: height,
    },
    homeContainer: {
        backgroundColor: "#D6D7EF",
        width: "100%",
        paddingHorizontal: 7,
        paddingTop: 22,
        flex: 1
    }
});