import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './MealItem.styles';

const MealItem = ({meal, onSelect}) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{uri: meal.strMealThumb}}
        style={styles.logo}
      />
      <View style={styles.footer}>
        <View style={styles.details}>
          <Text style={styles.company}>{meal.strMeal}</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={onSelect}>
          <Text style={styles.buttonTitle}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {MealItem};
