import { NativeModules } from "react-native";
import Get from "../handlers/Get";

const locale = NativeModules.I18nManager.localeIdentifier;

export const getCoords = (cityName: string) => Get(`/api/geo/?city=${cityName}&lang=${locale}`);

export const getWeather = (lat: string | number, lon: string | number) =>
    Get(`/api/weather/?lat=${lat}&lon=${lon}&lang=${locale}`);
