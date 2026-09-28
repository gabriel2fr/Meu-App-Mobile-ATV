import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Cabecalho from "./components/Cabecalho";

export default function App() {
  const [Like, setLike] = useState(0);

  return (
    <View style={styles.tela}>
      <Cabecalho />

      <Text style={styles.texto}>Encontre uma receita para fazer hoje.</Text>

      <Text style={styles.contador}>Like: {Like}</Text>

      <Button title="Curtir receita" onPress={() => setLike(Like + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    padding: 30,
  },

  texto: {
    fontSize: 18,
    marginBottom: 20,
  },

  contador: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
});
