import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { StatusBar } from "react-native";

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <Routes />
        </NavigationContainer>
    );
};

export default App;
