import { WiBarometer, WiHumidity, WiThermometerExterior } from "react-icons/wi";

export default function Result({ city }) {
  return city ? (
    <result>
      <div className="w-96 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="flex justify-between font-bold text-2xl mb-2 border-b">
            <p>{city.getName() + "," + city.getCountry()}</p>
            <p className="flex items-center">
              {city.getWeather().temp}ºC{" "}
              {WiThermometerExterior({ className: "text-2xl" })}
            </p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Máx: {city.getWeather().temp_max}ºC</p>
            <p>Mín: {city.getWeather().temp_min}ºC</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="flex items-center">
              {WiHumidity({ className: "text-2xl" })}
              {city.getWeather().humidity}%
            </p>
            <p className="flex items-center">
              {WiBarometer({ className: "text-3xl" })}
              {city.getWeather().pressure}hPa
            </p>
          </div>
          <p> Sensação térmica de {city.getWeather().feels_like}ºC.</p>
        </div>
        <div className="px-6 pt-4 pb-2"></div>
      </div>
    </result>
  ) : (
    <div
      id="error"
      className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
      role="alert"
    >
      <p className="font-bold">Ops!</p>
      <p>Não há cidades com este nome.</p>
    </div>
  );
}
