import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Artigos from "./components/Artigos";
import Filtro from "./components/Filtro";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [pesquisa, setPesquisa] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise uma notícia"
          placeholderTextColor="#888"
          value={pesquisa}
          onChangeText={(t) => setPesquisa(t)}
        />
        <Icon name="search" size={22} color="#999" style={styles.icon} />

      </View>

      {
        pesquisa != '' ? <Filtro busca={pesquisa} /> : <Artigos />
      }

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
    alignContent: "center",
    padding: 20,
    height: 30,
    width: 30,
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: "stretch",
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
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    paddingRight: 15,
    paddingTop: 50,
  },
});
