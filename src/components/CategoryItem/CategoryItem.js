import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './CategoryItem.styles';

const CategoryItem = ({category, onSelect}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelect}>
      <Image
        resizeMode="contain"
        source={{uri: category.strCategoryThumb}}
        style={styles.logo}
      />
      <View style={styles.footer}>
        <View style={styles.details}>
          <Text style={styles.company}>{category.strCategory}</Text>
          <Text style={styles.title}>{category.strCategoryDescription}</Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export {CategoryItem};
