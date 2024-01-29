import React from "react";
import * as S from "./styles";
import { Text, View } from "react-native";

const Home = () => {
    return (
        <S.Container  source={require("../../assets/background.png")}>
            <View>
                <S.City>Montreal</S.City>
                <S.Temperature>19º</S.Temperature>
                <S.Weather></S.Weather>
                <S.Coords>Montreal</S.Coords>
            </View>
            <S.HouseImage source={require("../../assets/house.png")}/>
        </S.Container>
    );
};

export default Home;
