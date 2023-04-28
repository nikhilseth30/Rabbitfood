import { Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


function CategoriesScreen ({navigation}){
    // console.log(CATEGORIES)
function renderCategoryItem (itemData){
    function pressHandler(){
            navigation.navigate("MealsOverview",{categoryId:itemData.id})
    }
    return <CategoryGridTile item={itemData} onPress={pressHandler}/>                    //reuseable components
}

    return <FlatList
        data={CATEGORIES}
        renderItem={({item})=> renderCategoryItem (item)}
        numColumns={2}    
    />
}

export default CategoriesScreen