/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, Node, setState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  TextInput,
  useColorScheme,
  ActivityIndicator, FlatList,
  View,
  Button,
  Alert,
} from 'react-native';


function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


const Header = ({ children, title }): Node => {
  const searchPlaceholder = "Search...";
  
  return (
    <View >
      <TextInput style={styles.searchBarContainer}
        placeholder={searchPlaceholder}
      />
    </View>
  );
};
const App: () => Node = () => {
  const [isLoading, setLoading] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';
  const [text, onChangeText] = React.useState("");
  const searchBarPlaceHolder = "Search...";
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=apple&from=2021-07-15&to=2021-07-15&sortBy=popularity&apiKey=011feb0f38974f83ba60054677808c65')
      .then((response) => response.json())
      .then((json) => { setData(shuffleArray(json.articles)); console.log(">> ", json.totalResults) })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <Header />

      <FlatList
        data={data}
        keyExtractor={({ url }, index) => url}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              style={styles.itemImage}
              source={{
                uri: item.urlToImage,
              }}
            />
            <Text style={styles.itemDateContainer}>{item.publishedAt}</Text>
            <Text style={styles.itemTitleContainer}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderColor: '#999999',
    lineHeight: 15,
    borderWidth: 1,
    borderRadius: 10
  },
  itemContainer: {
    marginTop: 10,
    padding: 10
  },
  itemImage: {
    width: '100%',
    height: 200,
    borderRadius: 15
  },
  itemTitleContainer: {
    padding: 10
  },
  itemDateContainer: {
    textAlign: 'right',
    fontSize: 12,
    color: '#999999',
    fontStyle: 'italic'
  }
});

export default App;


