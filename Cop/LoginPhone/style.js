import { StyleSheet,Dimensions } from "react-native";

import colors from '../../components/common/colors'

//const {width,height} = Dimensions.get("screen")


export const styles=(width,height) =>StyleSheet.create({
    topBg:{
        
        width:width,
        height:width*0.35,
        resizeMode:"cover"
    },
    ScrollView:{
        flex:1,
        backgroundColor:colors.white_level_1,
        height:10,
        marginTop:-85,
       borderTopRightRadius:width*0.05,
        borderTopLeftRadius:width*0.05,
        overflow:"hidden",
        padding:width*.03,
       



    },
    logo:{
        alignItems:"center",
        width:width*0.4,
        height:width*0.2,
       // resizeMode:"cover",
        backgroundColor:"red"
    },
    loginText:{
        fontFamily:"Lato-Bold",
        fontSize:25,
        color: colors.black_level_2
    },
    createNew:{
        fontFamily:"Lato-Regular",
        fontSize:18,
        color: colors.steel,
        textAlign:"center",
        marginVertical:width*0.025
    },
    footer:{
        padding:15,
        justifyContent:"center",
        alignItems:"center",
      backgroundColor:colors.lightGreen
    },
    footerText:{
        fontFamily:"Lato-Regular",
        fontSize:18,
        color: colors.black_level_3,
    }
})