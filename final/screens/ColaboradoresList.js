import React, { useState, useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const UserScreen = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { nome, email, phone } = doc.data();
        users.push({
          id: doc.id,
          nome,
        });
      });
      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>
      
      <Button
        onPress={() => props.navigation.navigate("ColaboradorCadastro")}
        title="Cadastrar Colaborador"
      />
      
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("ColaboradorInfo", {
                userId: user.id,
              });
            }}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  "https://thumbs.dreamstime.com/b/%C3%ADcone-do-avatar-no-c%C3%ADrculo-preto-s%C3%ADmbolo-liso-124920467.jpg",
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.nome}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};



export default UserScreen;
