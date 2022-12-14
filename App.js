import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import Artigos from "./components/Artigos";
import Filtro from "./components/Filtro";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [botao, setBotao] = useState(1);
  const [qtd, setQtd] = useState(0);

  return (
    <View style={styles.container}>

      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://1000logos.net/wp-content/uploads/2017/04/New-York-Times-logo.png",
        }}
      />

      <View style={styles.searchArea}>

        <TextInput
          style={styles.input}
          placeholder="Pesquise uma notícia"
          placeholderTextColor="#888"
          value={pesquisa}
          onChangeText={(t) => setPesquisa(t)}
        />
        <TouchableOpacity onPress={() => setBotao(botao + 1)}>
          <Icon name="filter" size={22} color="#999" style={styles.icon} />
        </TouchableOpacity>

        {botao % 2 == 0 ? <TextInput value={qtd} onChangeText={(n) => setQtd(n)} style={styles.inputNum} placeholder='Quantidade de artigos:' keyboardType="numeric" /> : () => setBotao(botao + 1)}
      </View>

      {pesquisa != "" ? <Filtro busca={pesquisa} /> : <Artigos qtd={qtd} />}

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
    marginTop: 10,
    height: 50,
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
  },
  inputNum: {
    marginTop: 10,
    height: 50,
    width: 110,
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    fontSize: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  searchArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    paddingRight: 15,
    paddingTop: 10,
  },
  tinyLogo: {
    marginTop: 150,
    width: "97%",
    height: 50,
  },

});
