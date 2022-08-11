interface Coordinate {
  lon: number;
  lat: number;
}
interface Weather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  description: string;
}
export default class City {
  constructor(
    private name: string,
    private coord: Coordinate,
    private weather: Weather,
    private contry: string,
    private timezone: number
  ) {}

  public getName() {
    return this.name;
  }
  public getCoord() {
    return this.coord;
  }
  public getWeather() {
    return this.weather;
  }
  public getCountry() {
    return this.contry;
  }
  public getTimezone() {
    return this.timezone;
  }
  public setName(name: string) {
    this.name = name;
  }
  public setCoord(coord: Coordinate) {
    this.coord = coord;
  }
  public setWeather(weather: Weather) {
    this.weather = weather;
  }
  public setCountry(contry: string) {
    this.contry = contry;
  }
  public setTimezone(timezone: number) {
    this.timezone = timezone;
  }
}
