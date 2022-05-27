import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

import firebase from "../database/firebase";

const AddUserScreen = (props) => {
  const initalState = {
    nome: "",
    sexo: "",
    datNasci: "",
    datAdi: "",
    DataDemi: "",
    endereco: "",
    tel: "",
    status: "",
    id: "",
    cod: "",
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, nome) => {
    setState({ ...state, [nome]: value });
  };

  const saveNewUser = async () => {
    if (state.nome === "") {
      alert("infoeme o nome");
    } else {

      try {
        await firebase.db.collection("users").add({
          nome: state.nome,
          sexo: state.sexo,
          datNasci: state.datNasci,
          datAdi: state.datAdi,
          DataDemi: state.DataDemi,
          endereco: state.endereco,
          tel: state.tel,
          status: state.status,
          cod: state.cod,
          id: state.id,
        });

        props.navigation.navigate("ColaboradoresList");
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Nome Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nome"
          onChangeText={(value) => handleChangeText(value, "nome")}
          value={state.nome}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Sexo"
          onChangeText={(value) => handleChangeText(value, "sexo")}
          value={state.sexo}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Data de nascimento"
          onChangeText={(value) => handleChangeText(value, "datNasci")}
          value={state.datNasci}
        />
        
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Data de adimissão"
          onChangeText={(value) => handleChangeText(value, "datAdi")}
          value={state.datAdi}
        />
        
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Data de demissão"
          onChangeText={(value) => handleChangeText(value, "DataDemi")}
          value={state.DataDemi}
        />
        
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Endereço"
          onChangeText={(value) => handleChangeText(value, "endereco")}
          value={state.endereco}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Telefone"
          onChangeText={(value) => handleChangeText(value, "tel")}
          value={state.tel}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Status"
          onChangeText={(value) => handleChangeText(value, "status")}
          value={state.status}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="ID"
          onChangeText={(value) => handleChangeText(value, "cod")}
          value={state.cod}
        />
      </View>

      

      <View style={styles.button}>
        <Button title="Salvar colaborador" onPress={() => saveNewUser()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#777",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddUserScreen;
