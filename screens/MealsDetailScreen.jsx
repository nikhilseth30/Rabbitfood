import { useContext, useEffect } from "react"
import { Text, View, ScrollView, Image, StyleSheet } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import IconButton from "../components/IconButton";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealsDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import { FavoritesContext } from "../store/context/favorites-context";

function MealsDetailScreen ({navigation,route}) {
    // console.log("mym",route.params.mealId)
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    // console.log(selectedMeal) 

    const  favoriteMealCtx = useContext(FavoritesContext)
    console.log(favoriteMealCtx)
    const mealIsFavorite = favoriteMealCtx.ids.includes(mealId)
    function changeFavoritesStatusHandler (){
        if(mealIsFavorite){
            favoriteMealCtx.removeFavorite(mealId)
        }else{
            favoriteMealCtx.addFavorite(mealId)
        }
    }



    useEffect(()=>{                                  //they run at the end
            navigation.setOptions({
                headerRight:()=> <IconButton icon={mealIsFavorite ? "star":"star-outline"} size={24} color="black" onPress={changeFavoritesStatusHandler} />
            })
    },[navigation,changeFavoritesStatusHandler])                          // function reference change
    
    return <ScrollView style={styles.rootContainer}>
         <Image source={{uri:selectedMeal.imageUrl}} style={styles.image} />
        <Text style={styles.title}>
            {selectedMeal.title}
        </Text>
        <MealsDetails style={styles.itemData}
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
        />
        {/* <Text>{JSON.stringify(selectedMeal.ingredients)}</Text>
        <Text>{JSON.stringify(selectedMeal.steps)}</Text> */}
        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <SubTitle>Ingredient</SubTitle>
                <List>{selectedMeal.ingredients}</List>
                <SubTitle>Step</SubTitle>
                <List>{selectedMeal.steps}</List>
            </View>
        </View>
    </ScrollView>
}

export default MealsDetailScreen

const styles = StyleSheet.create({
    image:{
            width:"100%",
            height:350
    },
    listOuterContainer:{
        alignItems:"center",
    
    },
    listContainer:{
        width:"80%"
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
        margin:8,
        color:"#e2b497"
    },
    rootContainer:{
        marginBottom:32
    },
    itemData:{
       color:"#e2b497"
    }
})