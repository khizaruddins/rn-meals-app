import React from 'react'
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import MealDetail from './MealDetail'

export const MealItem =  ({title, imageUrl, duration, complexity, affordability, onMealItemPressed}) => {
  return (
    <View style={styles.mealItem}>
      <Pressable onPress={onMealItemPressed} android_ripple={{color: '#ccc'}} style={({pressed}) => pressed ? styles.buttonPressed: null}>
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{uri: imageUrl}} />
            <Text style={styles.title}>
              {title}
            </Text>
          </View>
          <MealDetail duration={duration} complexity={complexity} affordability={affordability} />
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    overflow: Platform.OS == 'android' ?'hidden': 'visible'
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },  
  buttonPressed: {
    opacity: 0.5
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 18
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center'
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  }
})