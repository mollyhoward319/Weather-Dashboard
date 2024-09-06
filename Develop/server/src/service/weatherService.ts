import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates { 
  name: string;
  lat: number; 
  lon: number; 
  country: string;
  state: string;
}

// TODO: Define a class for the Weather object
class Weather {
  cityName: string;
  dt: number;
  icon: string;
  iconDescription: string;
  temp: number;
  humidity: number;
  wind_speed: number;

constructor (
  cityName: string,
  dt: number,
  icon: string;
  iconDescription: string;
  temp: number,
  humidity: number,
  wind_speed: number
) {
  this.cityName= cityName;
  this.dt= dt;
  this.icon = icon;
  this.iconDescription: string;
  this.temp= string;
  this.humidity= string;
  this.wind_speed= string;
}
}

// TODO: Complete the WeatherService class
class WeatherService {
  cityName: string;
  private baseURL?: string = process.env.API_BASE-URL!;
  private appid?: string = process.env.API-KEY!;
  private CITY: string = '';

  constructor() {
  this.cityName = '';
  this.baseURL = process.env.API_BASE_URL ||''; 
  this.appid = process.env.WEATHER_API_KEY || '';
  }
async getWeatherForCity(city: string) {
  try {
    const response = await fetch(
      `${this.baseURL}data/2.5/weather?q=${city}&appid=${this.appid}`
    );
    const data = await response.json();
    console.log(data);
    // const baseURL = 'https://api.openweathermap.org'
// fetch(this.baseURL) 
//   .then()
//     if(!response.ok) {
//       throw new Error('Failed to fetch');
//     }
//     return response.json(query);
//   }
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch location data');
  }
  // TODO: Define the baseURL, API key, and city name properties
}
  // TODO: Create fetchLocationData method

  private async fetchLocationData(query: string) {
    try {
      const response = await fetch(
    `${this.baseURL}/geo/1.0/direct?q=${query}&limit=5&appid=${this.appid}`
      );
  }
  catch (error) {
    console.log(error);
    throw new Error('Failed to fetch location data');
  }

}

  // TODO: Create destructureLocationData method
  // private destructureLocationData() {
  //   const { lat, lon } = data[0];
  //   return { lat, lon };
  // };

  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {
  //   return `${this.cityName.lat},${this.cityName.lon}`;
  // }
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {
  //   if (fetchLocationData && destructureLocationData) {
  //     return fetchLocationData;
  //   }
  //   const locationData = await this.fetchLocationData(this.buildGeocodeQuery());
  //   return this.destructureLocationData(locationData);
  // }
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
}

export default new WeatherService();
