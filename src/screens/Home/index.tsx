import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Geolocation, { GeoCoordinates } from "react-native-geolocation-service";
import { requestLocationPermission } from "../../utils/permissions";
import { getWeather } from "../../services/requests/requestHandler";
import { WeatherData } from "../../@types/types";
import Display from "../../components/Display";

const Home = () => {
    const [location, setLocation] = useState<GeoCoordinates | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [weatherData, setWeatherData] = useState<WeatherData>();

    const fetchLocation = async () => {
        const hasPermission = await requestLocationPermission();

        if (hasPermission) {
            Geolocation.getCurrentPosition(
                position => {
                    setLocation(position.coords);
                },
                error => {
                    setErrorMessage("Erro ao obter localização.");
                    console.log(error);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 15000,
                    maximumAge: 10000,
                },
            );
        } else {
            setErrorMessage("Permissão de localização negada.");
            console.log("Permissão de localização negada");
        }
    };

    useEffect(() => {
        fetchLocation();
    }, []);

    useEffect(() => {
        if (location) {
            getWeather(location.latitude, location.longitude).then(data =>
                setWeatherData(data),
            );
        }
    }, [location]);

    if(!weatherData) return;

    return (
        <S.Container source={require("../../assets/background.png")}>
            <Display data={weatherData} />
            <S.HouseImage source={require("../../assets/house.png")} />
        </S.Container>
    );
};

export default Home;
