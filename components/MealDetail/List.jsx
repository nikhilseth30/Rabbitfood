import { View, Text, StyleSheet} from "react-native";
import { color } from "react-native-reanimated";

function List ({children}){
    return children.map((dataPoint, idk)=><View key={idk} style={styles.list}>
        <Text style={styles.listText}>{dataPoint}</Text>
    </View>)
}

export default List;

const styles=StyleSheet.create({
list:{
    borderRadius:6,
    backgroundColor:"#e2b497",
    marginHorizontal:12,
    marginVertical:4,
    paddingVertical:4,
    paddingHorizontal:4,

},
listText:{
    color:"#fff",
    fontSize:16,
}
})