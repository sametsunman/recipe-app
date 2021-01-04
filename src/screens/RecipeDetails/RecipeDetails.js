/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, ImageBackground, Linking} from 'react-native';
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

  const Ingredients = () => {
    let ingredientArray = [];

    for (let i= 1; i <= 20 ; i++){
      if(recipeDetail["strMeasure"+i] && recipeDetail["strMeasure"+i]!=="")
        ingredientArray.push(<Text key={i} style={styles.ingredient}>{recipeDetail["strMeasure"+i]} {recipeDetail["strIngredient"+i]}</Text>);
    }

    return <View style={styles.ingredients}>{ingredientArray}</View>

  
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          source={{uri: recipeDetail.strMealThumb}}
          style={styles.image}>
          <View style={styles.detail}>
            <Text style={styles.title}>{recipeDetail.strMeal}</Text>
            <Icon name="video-library" size={30} onPress={()=>Linking.openURL(recipeDetail.strYoutube)} />
          </View>
        </ImageBackground>
        <Text style={styles.category}>
        {recipeDetail.strArea} - {recipeDetail.strCategory}
        </Text>
        <Ingredients />
        <Text  style={styles.instructions}>
          {recipeDetail.strInstructions}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export {RecipeDetails};
