import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Artigos from "./components/Artigos";

export default function App() {
  return (
    <View style={styles.container}>
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
});
