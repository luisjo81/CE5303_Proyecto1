import {
    StyleSheet
} from 'react-native';

import colors from '../../constants/colors';

//Styles const sheet
const styles = StyleSheet.create({   
    //Home Screen
    homeScreenCard: {
        flexBasis: '48%',
        marginHorizontal: 2,
        marginVertical: 2
    },
    homeScreenCardContent: {
        paddingHorizontal: 16,
        paddingVertical: 12.5
    },
    homeScreenCardFooter: {
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 25,
        paddingHorizontal: 16,
        paddingTop: 12.5
    },
    homeScreenCardHeader: {
        alignItems: "center",
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: "center",
        paddingHorizontal: 16,
        paddingVertical: 17
    },
    homeScreenCardImage: {
        alignSelf: 'center',
        height: 70,
        width: 70
    },
    homeScreenList: {
        backgroundColor: colors.black,
    },
    homeScreenListContainer: {
        alignItems: 'center'
    },
    homeScreenListInfoText: {
        color: colors.white,
        flex: 1,
        fontSize: 12,
        textAlign: 'center'
    },
    homeScreenListTitleText: {
        color: colors.white,
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    homeScreenMainContainer: {
        backgroundColor: colors.black,
        flex: 1,
        marginTop: 20
    },
    //Login Screen
    loginScreenBackground: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    loginScreenBackContainer: {
        padding: 20
    },
    loginScreenButtonContainer: {
        backgroundColor: colors.blue1,
        padding: 15,
        marginHorizontal: 65
    },
    loginScreenButtonText: {
        color: colors.white,
        fontSize: 20,
        textAlign: 'center'
    },
    loginScreenFormContainer: {
        flex: 1
    },
    loginScreenInputContainer: {
        color: colors.white,
        backgroundColor: colors.transparentGrey,
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    loginScreenMainContainer: {
        flex: 1
    },
    loginScreenSigninLinkText: {
        color: colors.white,
        fontSize: 15,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    loginScreenTitleText: {
        color: colors.white,
        flex: 1,
        marginTop: 10,
        fontFamily: 'Verdana',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: 'bold',
        height: '10%',
        textAlign: 'center',
        width: '100%'
    },
    //Signals Screen
    signalsScreenBackground: {
        flex: 1,
        margin: 5,
        height: '100%',
        width: '98%',
        justifyContent: 'center',
        alignItems: "center",
    },
    bathroomButton: {
        position: 'absolute',
        padding: 15,
        height: 40,
        width: 40,
        top: -195,
        bottom: 200,
        left: 75,
        right: 0
    },
    bathroomDoor: {
        position: 'absolute',
        padding: 15,
        height: 40,
        width: 40,
        top: 60,
        bottom: 0,
        left: 188,
        right: 0
    },
    kitchenButton: {
        position: 'absolute',
        padding: 15,
        height: 40,
        width: 40,
        top: 10,
        bottom: 200,
        left: -110,
        right: 0
    },
    livingRoomButton: {
        position: 'absolute',
        padding: 15,
        height: 40,
        width: 40,
        top: 100,
        bottom: -200,
        left: 40,
        right: 0
    },
    bedroom1Button: {
        position: 'absolute',
        padding: 15,
        height: 40,
        width: 40,
        top: 130,
        bottom: -200,
        left: -110,
        right: 50
    },
    bedroom1Door: {
        position: 'absolute',
        padding: 15,
        height: 40,
        width: 40,
        top: 380,
        bottom: 0,
        left: 98,
        right: 50
    },
    bedroom2Button: {
        position: 'absolute',
        padding: 15,
        height: 40,
        width: 40,
        top: -25,
        bottom: -50,
        left: 55,
        right: 0
    },
    bedroom2Door: {
        position: 'absolute',
        padding: 15,
        height: 40,
        width: 40,
        top: 220,
        bottom: 0,
        left: 150,
        right: 0
    },
    frontDoor: {
        position: 'absolute',
        padding: 15,
        height: 40,
        width: 40,
        top: 443,
        bottom: 0,
        left: 200,
        right: 0
    },
    backDoor: {
        position: 'absolute',
        padding: 15,
        height: 40,
        width: 40,
        top: 37,
        bottom: 0,
        left: 60,
        right: 0
    },
    //Camera Screen
    cameraScreenBackground: {
        flex: 1,
        margin: 5,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
    },
    cameraButton: {
        position: 'absolute',
        padding: 15,
        height: 80,
        width: 80,
        top: 400,
        bottom: 0,
        left: 117,
        right: 0
    }
})

export default styles;