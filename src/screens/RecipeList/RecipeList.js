import React, {useState,useEffect} from 'react';
import axios from 'axios';
import styles from './RecipeList.styles';
import {SafeAreaView, View, FlatList} from 'react-native';
import {SearchBar, MealItem} from './../../components';

function RecipeList(props) {

    const {categoryName} = props.route.params;
    const api_url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='+categoryName;

    const [mealList, setMealList] = useState([]);

    useEffect(() => {
      fetchMealData();
    }, []);

    function fetchMealData() {
      axios
        .get(api_url)
        .then((response) => {
          setMealList(response.data.meals)
        });
    }

    function searchMeal(searchedField) {
      axios
        .get(api_url, {
          params: {
            description: searchedField,
          },
        })
        .then((response) => setMealList(response.data));
    }

  
    const renderMeal = ({item}) => (
      <MealItem
        meal={item}
        onSelect={() => props.navigation.navigate('RecipeDetails', {id: item.idMeal})}
      />
    );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar onSearch={searchMeal} />
        <FlatList
          keyExtractor={(item) => item.idMeal}
          data={mealList}
          renderItem={renderMeal}
        />
      </View>
    </SafeAreaView>
  );
};

export {RecipeList};
