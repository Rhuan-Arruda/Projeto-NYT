import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const Artigos = () => {
  let ano = 2022;
  let mes = 12;
  const [artigo, setArtigo] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/archive/v1/${ano}/${mes}.json?api-key=Ag5Yo8StAwPyGMRYAyiAAYGljIf1azyV`
    )
      .then(response => response.json())
      .then(data => setArtigo(data.response.docs[1]));
    console.log(artigo);
  }, []);
  return <Text>requisição concluida</Text>;
};

export default Artigos;
