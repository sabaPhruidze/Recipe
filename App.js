import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const recipes = [
    {
      name: "Pad Thai",
      info: "45 min | 2 servings",
      image: require("./assets/PadThai.jpg"),
    },
    {
      name: "Seared Scallops with Romesco Sauce",
      info: "20 min | 4 servings",
      image: require("./assets/scallops.jpg"),
    },
    {
      name: "Grilled Chicken with Lemon Butter",
      info: "60 min | 2 servings",
      image: require("./assets/LemonChicken.jpg"),
    },
  ];
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
            <Text title heavy>
              Spicy Shrimp
            </Text>
            <Divider />
            <Text bold>80 calories per 100g</Text>
            <Text>3g fat | 10g protein | 8g carbs</Text>
          </MainRecipe>
          <Button>
            <Text bold small>
              LEARN MORE
            </Text>
          </Button>
        </SafeAreaView>
      </RecipeBackground>
      <RecipesContainer>
        <Text dark heavy large>
          Recipes
        </Text>
        <Text dark small>
          18 recipes available
        </Text>
        <Recipes>
          {recipes.map((data, idx) => (
            <Recipe key={idx}>
              <RecipeImage source={data.image} />
              <RecipeInfo>
                <Text dark bold>
                  {data.name}
                </Text>
                <Text dark small>
                  {data.info}
                </Text>
              </RecipeInfo>
              <AntDesign name="hearto" size={18} color="#000" />
            </Recipe>
          ))}
        </Recipes>
      </RecipesContainer>
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
  color: ${({ dark }) => {
    return dark ? "#000" : "#FFF";
  }};
  ${({ title, large, small }) => {
    switch (true) {
      case title:
        return "font-size:32px";
        break;
      case large:
        return "font-size:20px";
        break;
      case small:
        return "font-size:13px";
        break;
      default:
        return "font-size:13px";
        break;
    }
  }};
  ${({ bold, heavy }) => {
    switch (true) {
      case bold:
        return `font-weight:600`;
        break;
      case heavy:
        return `font-weight:700`;
        break;
    }
  }}
`;

const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  margin-top: 20px;
`;

const Back = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
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
const Button = styled.TouchableOpacity`
  margin: 0 0 48px 32px;
  background-color: rgba(255, 255, 255, 0.3);
  align-self: flex-start;
  padding: 6px 18px;
  border-radius: 100px;
`;
const RecipesContainer = styled.View`
  margin-top: -24px;
  padding: 32px;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;
const Recipes = styled.View`
  margin-top: 16px;
`;
const Recipe = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;
const RecipeImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;

const RecipeInfo = styled.View`
  flex: 1;
  margin-left: 12px;
`;
