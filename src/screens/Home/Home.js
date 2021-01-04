import React, {useState,useEffect} from 'react';
import axios from 'axios';
import styles from './Home.styles';
import {SafeAreaView, View, FlatList, Text} from 'react-native';
import {CategoryItem} from './../../components';

function Home(props) {

    const api_url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
      fetchCategoryData();
    }, []);

    function fetchCategoryData() {
      axios
        .get(api_url)
        .then((response) => {
          setCategoryList(response.data.categories)
        });
    }
  
    const renderCategory = ({item}) => (
      <CategoryItem
        category={item}
        onSelect={() => props.navigation.navigate('RecipeList', {categoryName: item.strCategory})}
      />
    );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Recipe App - Categories</Text>
        <FlatList
          keyExtractor={(item) => item.idCategory}
          data={categoryList}
          renderItem={renderCategory}
        />
      </View>
    </SafeAreaView>
  );
};

export {Home};
