import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import ColaboradorCadastro from "./screens/ColaboradorCadastro";
import ColaboradorInfo from "./screens/ColaboradorInfo";
import ColaboradoresList from "./screens/ColaboradoresList";

const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#621FF7",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="ColaboradoresList"
        component={ColaboradoresList}
        options={{ title: "Lista de colaboradores" }}
      />
      <Stack.Screen
        name="ColaboradorCadastro"
        component={ColaboradorCadastro}
        options={{ title: "Cadastrar colaborador" }}
      />
      <Stack.Screen
        name="ColaboradorInfo"
        component={ColaboradorInfo}
        options={{ title: "Informações do colaborador" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
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
