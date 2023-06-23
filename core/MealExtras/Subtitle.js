//import liraries
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Subtitle = ({title}) => {
  return (
    <View style={styles.subTitleContainer}>
        <Text style={styles.subtitle}>{title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  subtitle: {
    color:'#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderColor: '#e2b497',
    borderBottomWidth: 2
  }
});

//make this component available to the app
export default Subtitle;
