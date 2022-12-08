import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import Card from "../Card";


const Filtro = () => {
    const [lista, setLista] = useState();
//const [searchText, setSearchText] = useState('');
/* 
<TextInput
style={styles.input}
placeholder="Pesquise uma notícia"
placeholderTextColor="#888"
value={searchText}
onChangeText={(t) => setSearchText(t)}
/>
*/
    let textoFiltro = 'election';

  useEffect(() => {
      fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${textoFiltro}&api-key=Ag5Yo8StAwPyGMRYAyiAAYGljIf1azyV`
      )
        .then(response => response.json())
        .then(data => setLista(data.response.docs));
  }, []);
  
  console.log(lista)
  return (
    <SafeAreaView>
      <FlatList
        
        data={lista}
        //keyExtractor={lista.web_url}
        renderItem={({ item }) => <Card data={item} />}
      />
    </SafeAreaView>

  );
}

export default Filtro;