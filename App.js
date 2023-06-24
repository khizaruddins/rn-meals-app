import { StyleSheet } from 'react-native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';
import { Ionicons } from '@expo/vector-icons';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouriteScreen from './screens/FavoriteScreen';

const Stack = createNativeStackNavigator();
// an important note use npx expo start --clear while configuring drawer 
const Drawer = createDrawerNavigator();

const TabsNavigator = () => {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: '#fff',
    sceneContainerStyle: { backgroundColor: '#3f2f25' },
    drawerContentStyle: {backgroundColor: '#351401'},
    drawerInactiveTintColor: '#fff',
    drawerActiveTintColor: '#351401',
    drawerActiveBackgroundColor: '#c7977a'
  }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
      drawerIcon: ({color, size}) => (
        <Ionicons name='apps-outline' color={color} size={size}/>
      )
    }} />
    <Drawer.Screen name="Favourites" component={FavouriteScreen} options={{
      drawerIcon: ({color, size}) => (
        <Ionicons name='star-outline' color={color} size={size}/>
      )
    }} />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: '#fff',
          contentStyle: { backgroundColor: '#3f2f25' }
        }}>
          <Stack.Screen name="TabsNav" component={TabsNavigator}
            options={{
              headerShown: false
            }} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} options={{title: 'About the meal'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
