import { Dimensions, ImageBackground, StatusBar } from "react-native";
import styled from "styled-components/native";

export const Container = styled(ImageBackground)`
    padding-top: ${StatusBar.currentHeight
        ? StatusBar.currentHeight + 50
        : 50}px;
`;

export const HouseImage = styled.Image`
    margin-top: 24px;
`;
