import { ImageBackground } from "react-native";
import styled from "styled-components/native";

export const Container = styled(ImageBackground)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const HouseImage = styled.Image``;

export const City = styled.Text`
    font-size: 32px;
    color: white;
`;

export const Temperature = styled.Text`
    font-family: "SF-Pro-Display-Thin";
    color: white;
    font-size: 96px;
`;

export const Weather = styled.Text``;

export const Coords = styled.Text``;
