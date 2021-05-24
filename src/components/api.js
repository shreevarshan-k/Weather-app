import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/forecast';
const API_KEY = 'f8e60a48fb199a90df3e0a6a1e47b333';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}