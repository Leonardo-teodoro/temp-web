export default function Result({ city }) {
  return city ? (
    <result>
      <h1>{city.getName()}</h1>
      <p>
        {city.getWeather().temp}ºC, com temperatura máxima de
        {city.getWeather().temp_max} e mínima de {city.getWeather().temp_min}
      </p>
      <p> Sensação térmica de {city.getWeather().feels_like}ºC.</p>
    </result>
  ) : (
    <h1> Não há cidades com este nome</h1>
  );
}
