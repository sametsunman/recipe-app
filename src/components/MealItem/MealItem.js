import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './MealItem.styles';

const MealItem = ({meal, onSelect}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelect}>
      <Image
        resizeMode="contain"
        source={{uri: meal.strMealThumb}}
        style={styles.logo}
      />
      <View style={styles.footer}>
        <View style={styles.details}>
          <Text style={styles.name}>{meal.strMeal}</Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export {MealItem};
