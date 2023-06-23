import { StyleSheet, FlatList, View } from "react-native"
import { MEALS, CATEGORIES } from "../data/dummy-data"
import { MealItem } from "../core/MealItem";
import { useLayoutEffect } from "react";

export const MealsOverviewScreen = ({route, navigation}) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(()=> {
    const categoryTitle = CATEGORIES.find(category => category.id === catId).title;
    navigation.setOptions({
      title: categoryTitle
    })
  }, [catId,navigation])

  const renderMealItem = (itemData) => {
    const mealItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
      onMealItemPressed: () => {
        navigation.navigate('MealDetailScreen', {
          id: itemData.item.id
        })
      }
    }
    return <MealItem {...mealItemProps}/>
  }
  return (
    <View style={styles.container}>
      <FlatList 
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})
