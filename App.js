import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Artigos from "./components/Artigos";


export default function App() {
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState();

  

  useEffect(() => {
    if (searchText != '') {
      fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchText}&api-key=Ag5Yo8StAwPyGMRYAyiAAYGljIf1azyV`
      )
        .then(response => response.json())
        .then(data => setList(data.response.docs));
    } else {
      
    }
  }, [searchText]); 

  return (
    <View style={styles.container}>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise uma notícia"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
      </View>
      <Artigos />
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    alignContent: 'center',
    padding: 20,
    height: 30,
    width: 30,
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
  input: {
    flex: 1,
    marginTop: 70,
    height: 50,
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
  },
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
