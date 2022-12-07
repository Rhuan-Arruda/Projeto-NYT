import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import Card from "../Card";

const Artigos = () => {
  let ano = 2022;
  let mes = 12;
  const [artigo, setArtigo] = useState([]);
  
  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/archive/v1/${ano}/${mes}.json?api-key=Ag5Yo8StAwPyGMRYAyiAAYGljIf1azyV`
    )
      .then(response => response.json())
      .then(data => setArtigo(data.response.docs));
    console.log(artigo);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        style={styles.styles}
        data={artigo}
        keyExtractor={artigo.web_url}
        renderItem={({ item }) => <Card data={item} />}
      />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({

});
export default Artigos;
