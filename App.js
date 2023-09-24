import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <Container>
      <StatusBar style="light" />
      <RecipeBackground source={require("./assets/main.jpg")}>
        <SafeAreaView>
          <MenuBar>
            <Back>
              <AntDesign name="arrowleft" size={24} color="#000" />
              <Text style={{ marginLeft: 10 }}>Ingredients</Text>
            </Back>
            <AntDesign name="heart" size={24} color="#000" />
          </MenuBar>
        </SafeAreaView>
      </RecipeBackground>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #fff;
`;

const RecipeBackground = styled.ImageBackground`
  width: 100%;
  height: 100px;
`;

const Text = styled.Text`
  /* color: ${(props) => (props.dark ? "#000" : "#fff")};
  font-family: "AvenirNext-Regular"; */
`;

const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

const Back = styled.View`
  flex-direction: row;
  align-items: center;
`;
