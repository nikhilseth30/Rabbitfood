import { StyleSheet, Text, View } from "react-native"

function SubTitle ({children}){
    return <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
    </View>

}

export default SubTitle

const styles = StyleSheet.create({
    subtitle:{
        color:"#e2b497",
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center"
    },
    subtitleContainer:{
        padding:20,
        marginHorizontal:12,
        marginVertical:4,
        borderBottomColor:"#e2b497"

    }
})