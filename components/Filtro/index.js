import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import Card from "../Card";
import uuid from "react-native-uuid"


const Filtro = ({ busca }) => {
  const [lista, setLista] = useState();
  console.log(busca)

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${busca}&api-key=Ag5Yo8StAwPyGMRYAyiAAYGljIf1azyV`
    )
      .then((response) => response.json())
      .then((data) => setLista(data.response.docs));
  }, [busca]);

  return (
    <SafeAreaView>
      <FlatList
        data={lista}
        keyExtractor={() => uuid.v4()}
        renderItem={({ item }) => <Card data={item} />}
      />
    </SafeAreaView>
  );
};

export default Filtro;
