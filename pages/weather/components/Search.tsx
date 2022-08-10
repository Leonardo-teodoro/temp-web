import { useState } from "react";
import City from "../city";
import CityService from "../city-service";
import Result from "./Result";
export default function Search() {
  const [city, setCity] = useState<City>(null);

  async function handleClick() {
    const service = new CityService();
    const response = await service.findCity({
      q: document.getElementById("city").value,
    });

    setCity(response);
  }
  return (
    <div>
      <search>
        <label htmlFor="city">Cidade:</label>
        <input id="city" name="city" type="text"></input>
        <button id="search-temperature" onClick={handleClick}>
          Pesquisar
        </button>
      </search>
      <Result city={city}></Result>
    </div>
  );
}
