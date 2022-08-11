import api from "../public/services/api";
import City from "./city";

export default class CityService {
  public async findCity(pParams: { q: string }): Promise<City> {
    try {
      const response = await api.get(`/cities/temperature?q=${pParams.q}`, {});

      const city = response.data;

      return new City(
        city.name,
        city.coord,
        {
          temp: city.main.temp,
          feels_like: city.main.feels_like,
          temp_max: city.main.temp_max,
          temp_min: city.main.temp_min,
          pressure: city.main.pressure,
          humidity: city.main.humidity,
          description: city.main.description,
        },
        city.sys.country,
        city.timezone
      );
    } catch (err) {
      throw new Error(err);
    }
  }
}
