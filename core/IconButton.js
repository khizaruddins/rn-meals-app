//import liraries
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

// create a component
const IconButton = ({icon, color, onIconPressed}) => {
  return (
    <Pressable onPress={onIconPressed} style={({pressed}) => pressed && styles.pressed}>
      <Ionicons name={icon} size={24} color={color}/>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7
  },
});

//make this component available to the app
export default IconButton;
