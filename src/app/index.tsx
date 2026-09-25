
import { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {

  const [adultos, setAdultos] = useState('');
  const [criancas, setCriancas] = useState('');
  const [duracao, setDuracao] = useState('');

  const calcular = () => {

    const numAdultos = Number(adultos);
    const numCriancas = Number(criancas);
    const duracaoChurrasco = Number(duracao);

    if (isNaN(numAdultos) || isNaN(numCriancas) || isNaN(duracaoChurrasco) || !numAdultos || !numCriancas || !duracaoChurrasco) {
      Alert.alert("Por favor, insira valores válidos para todos os campos.");
      return;
    }


    let consumoCarneAdulto = duracaoChurrasco >= 6 ? 650 : 400;
    let consumoCarneCrianca = consumoCarneAdulto / 2;

    let consumoBebidaAdulto = duracaoChurrasco >= 6 ? 2000 : 1200;
    let consumoBebidaCrianca = consumoBebidaAdulto / 2;

    const totalCarne = (numAdultos * consumoCarneAdulto) + (numCriancas * consumoCarneCrianca);
    const totalBebida = (numAdultos * consumoBebidaAdulto) + (numCriancas * consumoBebidaCrianca);

    const totalCarneKg = (totalCarne / 1000).toFixed(2);
    const totalBebidaL = (totalBebida / 1000).toFixed(2);

    Alert.alert(
      "🧾Resultado do Churrasco",
      `🥩Quantidade de carne: ${totalCarneKg} kg\n🍹Quantidade de bebidas: ${totalBebidaL} L`
    );

  }

  return (
     <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={100}
  >
    <View style={styles.container}>

      <View style={styles.cardHeader}>
        
        <View style={styles.icon}>
          <Text style={styles.iconText}>🔥</Text>
          </View>
          <View style={styles.textContainer}>
        <Text style={styles.title}>Churrascômetro</Text>
        <Text style={styles.subtitle}>Calcule a quantidade de carne e bebidas sem desperdício</Text>
        </View>
        </View>

        <View style={styles.card} >
                <Text style={styles.cardText}>💡 Como funciona o cálculo:</Text>
        <Text>1. Até 5 horas: 400g de carne por pessoa e 1.2L de bebida por adulto.</Text>
        <Text>2. 6 horas ou mais: 650g de carne e 2.0L de bebida por adulto.</Text>
        <Text>3. Crianças: consomem metade da proporção de um adulto.</Text>
        </View>


      <View style={styles.card}>
      <View style={styles.inputContainer}>
      <Text>👥 Número de adultos</Text>
      <TextInput
      keyboardType="number-pad"
        placeholder="Ex: 10"
        style={styles.input}
        value={adultos}
        onChangeText={setAdultos}
      />
      </View>

      <View style={styles.inputContainer}>
      <Text>🧒 Número de crianças</Text>
        <TextInput
        keyboardType="number-pad"
        placeholder="Ex: 4"
        style={styles.input}
        value={criancas}
        onChangeText={setCriancas}
      />
      </View>

    <View style={styles.inputContainer}>
      <Text>⏰ Duração do churrasco (horas)</Text>
      <TextInput
        keyboardType="number-pad"
        placeholder="Ex: 4"
        style={styles.input}
        value={duracao}
        onChangeText={setDuracao}
      />
      </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular Quantidades</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button1} onPress={() => {
        setAdultos('');
        setCriancas('');
        setDuracao('');
      }}>
        <Text style={styles.buttonText}>Limpar Campos</Text>
      </TouchableOpacity>

    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    gap: 20,
    // justifyContent: "flex-end",
    // alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
  },
  inputContainer: {
    marginBottom: 10,
    gap: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    padding: 10,
    width: "100%",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",

},
buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  button1: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#FFCCCB",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 30,
  },
  textContainer: {
    flex: 1,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },


});
