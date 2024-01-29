import Get from "../handlers/Get";

export const getCoords = (cityName: string) => Get(`/api/geo/?q=${cityName}`);

export const getWeather = (lat: string, lon: string) =>
    Get(`/api/weather/?lat=${lat}&lon=${lon}`);
