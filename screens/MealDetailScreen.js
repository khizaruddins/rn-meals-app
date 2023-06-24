//import liraries
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetail from '../core/MealDetail';
import Subtitle from '../core/MealExtras/Subtitle';
import List from '../core/MealExtras/List';
import { useLayoutEffect } from 'react';
import IconButton from '../core/IconButton';
// create a component
const MealDetailScreen = ({route, navigation}) => {
  const handleHeaderPress = () => {
    console.log('pressed');
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>  <IconButton icon="star-outline" color="white" onIconPressed={handleHeaderPress} />
    });
  }, [navigation, handleHeaderPress]);
  const mealId = route.params.id;
  const mealsObj = MEALS.find(meal => meal.id === mealId);
  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: mealsObj.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{mealsObj.title}</Text>
      <MealDetail textStyle={styles.detailText} duration={mealsObj.duration} complexity={mealsObj.complexity} affordability={mealsObj.affordability} />
      <View style={styles.listOuterContainer} >
        <View style={styles.listContainer}>
          <Subtitle title="Ingredients:" />
          <List list={mealsObj.ingredients} />
          <Subtitle title="Steps:" />
          <List list={mealsObj.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  root: {
    marginBottom: 34
  },  
  image: {
    width: '100%',
    height: 350
  },
  detailText: {
    color: 'white'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: '#fff'
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center'
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    width: '80%'
  }
});

//make this component available to the app
export default MealDetailScreen;
