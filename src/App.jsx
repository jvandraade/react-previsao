import { useState, useRef } from "react";
import "./App.css";
import axios from "axios";
import WeatherInformations from "./components/WeatherInformations/WeatherInformations";
import WeatherInformations5Days from "./components/WeatherInformations5Days/WeatherInformations5Days";

function App() {
    const [weather, setWeather] = useState();
    const [weather5Days, setWeather5Days] = useState();
    const inputRef = useRef;

    async function searchCity() {
        console.log(inputRef.current.value);
        const city = inputRef.current.value;
        const key = "53f9d08068b67e5f76830f879655bc08";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
        const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

        const apiInfo = await axios.get(url);
        const apiInfo5Days = await axios.get(url5Days);

        console.log(apiInfo5Days);

        setWeather5Days(apiInfo5Days.data);
        setWeather(apiInfo.data);
    }

    return (
        <div className="container">
            <h1>Previsão do Tempo</h1>
            <input
                ref={inputRef}
                type="text"
                placeholder="Digite o nome da sua cidade"
            />
            <button onClick={searchCity}>Buscar</button>

            {weather && <WeatherInformations weather={weather} />}
            {weather5Days && (
                <WeatherInformations5Days weather5Days={weather5Days} />
            )}
        </div>
    );
}

export default App;
