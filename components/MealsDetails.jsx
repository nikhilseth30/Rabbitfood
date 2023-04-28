import {View,Text,StyleSheet} from 'react-native'

function MealsDetails({duration,complexity,affordability,style}){
return <View style={styles.details}>
        <Text style={styles.detailsItem}>{duration}m</Text>
        <Text  style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
        <Text  style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
</View>
}

export default MealsDetails

const styles = StyleSheet.create({
    details:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding:9
    },
    detailsItem:{
        fontSize:15,
        marginHorizontal:10
    }

})