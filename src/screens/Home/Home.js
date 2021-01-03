import React, {useState,useEffect} from 'react';
import axios from 'axios';
import styles from './Home.styles';
import {SafeAreaView, View, FlatList} from 'react-native';
import {SearchBar, CategoryItem} from './../../components';

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

    function searchCategory(searchedField) {
      axios
        .get(api_url, {
          params: {
            description: searchedField,
          },
        })
        .then((response) => setCategoryList(response.data));
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
        <SearchBar onSearch={searchCategory} />
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
