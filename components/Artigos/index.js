import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import Card from "../Card";

const Artigos = ({ qtd }) => {
  let ano = 2022;
  let mes = 12;
  const [artigo, setArtigo] = useState([]);
  const [aux, setAux] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/archive/v1/${ano}/${mes}.json?api-key=Ag5Yo8StAwPyGMRYAyiAAYGljIf1azyV`
    )
      .then(response => response.json())
      .then(data => {
        const aux1 = data.response.docs;
        setArtigo(data.response.docs)
        if (qtd != 0) {
          for (i = 0; i < qtd; i++) {
            setAux(atual => [...atual, aux1[i]]);
          }
        }
      }
      );
    setAux([]);
  }, [qtd]);

  return (
    <SafeAreaView>
      <FlatList
        style={styles.styles}
        data={aux != 0 ? aux : artigo}
        keyExtractor={aux != 0 ? aux.web_url : artigo.web_url}
        renderItem={({ item }) => <Card data={item} />}
      />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({

});
export default Artigos;
