import React from "react";
import * as S from "./styles";
import { WeatherData } from "../../@types/types";

interface DisplayProps {
    data: WeatherData;
}

const Display: React.FC<DisplayProps> = ({ data }) => {
    return (
        <S.Container>
            <S.Text fontSize="medium" fontStyle="displayRegular">
                {data.name}
            </S.Text>
            <S.Text fontSize="big" fontStyle="displayThin">
                {data.main.temp.toFixed()}°
            </S.Text>
            <S.Text secondary>{data.weather.description}</S.Text>
            <S.Text>
                H:{data.coord.lat.toFixed()}° L:
                {data.coord.lon.toFixed()}°
            </S.Text>
        </S.Container>
    );
};

export default Display;
