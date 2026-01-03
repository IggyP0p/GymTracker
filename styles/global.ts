import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#9CA3AF',
        margin: 0, padding: 0,
    },

    /* superior tab styles */

    topTab: {
        backgroundColor: '#9CA3AF',
        width: '100%', height: '8%',
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,

        borderBottomWidth: 1,
        borderBottomColor: '#101010ff',
    },

    topTitle: {
        fontSize: 22,
        color: '#FFFFFF',
        marginLeft: 15,
    },

    main: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9CA3AF'
    }

});
