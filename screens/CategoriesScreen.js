import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { CategoryGridTile } from '../core/CategoryGridTile';

export const CategoriesScreen = ({navigation}) => {
  const pressHandler = (itemData) => {
    navigation.navigate('MealsOverview', {
      categoryId: itemData.item.id
    });
  }
  const renderCategoryItem = (itemData) => {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onCategoryPress={pressHandler.bind(this, itemData)}  />
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}
