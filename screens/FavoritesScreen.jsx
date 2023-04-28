import { useContext } from "react"
import { StyleSheet, Text, View } from "react-native"
import { FavoritesContext } from "../store/context/favorites-context"
import { MEALS } from "../data/dummy-data"
import MealList from "../components/MealsList/MealsList"

function FavoritesScreen() {

    const favoriteMealCtx = useContext(FavoritesContext)
    const favoriteMeals = MEALS.filter(meal => favoriteMealCtx.ids.includes(meal.id))
        console.log(favoriteMeals.length)

        if (favoriteMeals.length ===0){
            return <View style={styles.rootContainer}>
                <Text style= {StyleSheet.text}>You have no favorites meals yet</Text>
            </View>
        }
       return <MealList items={favoriteMeals}/> 
}

export default FavoritesScreen


const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
       
    },
    text:{
        fontSize:18,
        fontWeight:"bold",
        color:"white"

    }
})