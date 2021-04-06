import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingVertical: 75,
        paddingHorizontal: 25,
    },
    introText: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
    },
    loader: {
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    list: {
        alignItems: 'center',
        marginVertical: 15
    },
    card: {
        borderRadius: 6,
        elevation: 3, // how much it comes away from the screen
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    },
    // paragraph: {
    //     marginVertical: 8,
    //     lineHeight: 20,
    // },
    // input: {
    //     borderWidth: 1,
    //     borderColor: '#ddd',
    //     padding: 10,
    //     fontSize: 18,
    //     borderRadius: 6,
    // },
    // errorText: {
    //     color: 'crimson',
    //     fontWeight: 'bold',
    //     marginBottom: 10,
    //     marginTop: 6,
    //     textAlign: 'center',
    // },
});

export default styles;
