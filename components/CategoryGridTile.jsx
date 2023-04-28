import { Text, View, StyleSheet, Platform, Pressable   } from "react-native";

function CategoryGridTile({item,onPress}){
    return <View style={styles.gridItem}>
        <Pressable 
        android_ripple={{color:"#ccc"}}
        style={({pressed}) =>[styles.button,pressed?styles.buttonPressed:null]}
        onPress={onPress}
        >
        <View style={[styles.innerContainer,{backgroundColor:item.color}]}>
        <Text style={styles.item}>
           {item.title}
        </Text>
        </View>
        </Pressable>
    </View>
}

export default CategoryGridTile

const styles = StyleSheet.create ({
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        borderWidth:2,
        elevation:4,
        shadowColor:"black",            //ios feature
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:2},
        overflow:Platform.OS === "andioid" ? "hidden" : "visible"
    },
    title:{
      fontWeight:"bold",
      fontSize:22,
    },
    innerContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    button:{
        flex:1,
        
    },
    buttonPressed:{
        opacity:0.5,
    }
})