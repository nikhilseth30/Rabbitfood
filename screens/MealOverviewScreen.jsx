import { View,Text } from "react-native"
import MealList from "../components/MealsList/MealsList"
import { MEALS } from "../data/dummy-data"

function MealsOverviewScreen({route}){
  const catId = route.params.categoryId
  
  const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >=0)

return <MealList items={displayMeals}/>
}

export default MealsOverviewScreen