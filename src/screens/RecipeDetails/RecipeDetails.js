/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './RecipeDetails.styles';

function RecipeDetails({route}) {
  const {id} = route.params;
  const api_url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id;

  const [recipeDetail, setRecipeDetail] = useState({});

  async function fetchRecipeData() {
    const response = await axios.get(api_url);
    setRecipeDetail(response.data.meals[0]);
  }

  useEffect(() => {
    fetchRecipeData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          source={{uri: recipeDetail.strMealThumb}}
          style={styles.image}>
          <View style={styles.detail}>
            <Text style={styles.title}>{recipeDetail.strMeal}</Text>
            <Icon name="youtube" size={35} />
          </View>
        </ImageBackground>
        <Text>
        {recipeDetail.strArea} - {recipeDetail.strCategory}
        </Text>
        <Text>
          {recipeDetail.strInstructions}
        </Text>
        <Text>
          {recipeDetail.strInstructions}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export {RecipeDetails};
