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
              <AntDesign name="arrowleft" size={24} color="#fff" />
              <Text style={{ marginLeft: 10 }}>Ingredients</Text>
            </Back>
            <AntDesign name="heart" size={24} color="#fff" />
          </MenuBar>
          <MainRecipe>
            <Text>Spicy Shrimp</Text>
            <Text>80 calories per 100g</Text>
            <Text>3g fat | 10g protein | 8g carbs</Text>
          </MainRecipe>
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
`;

const Text = styled.Text`
  color: "white";
`;

const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

const Back = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;
const MainRecipe = styled.View`
  padding: 0 32px;
  margin: 200px 0 32px 0;
`;
const Divider = styled.View`
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  width: 150px;
  margin: 8px 0;
`;
