import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    image: {
      height: deviceSize.height / 3,
      borderBottomWidth: 1,
      borderColor: '#e0e0e0',
      justifyContent: 'flex-end',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 30,
    },
    category: {
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: 5
    },
    ingredients:{
      margin:5
    },
    detail: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 5,
      backgroundColor: '#cececeaa'
    },
    instructions: {
      margin:5
    }
  });

  export default styles;
