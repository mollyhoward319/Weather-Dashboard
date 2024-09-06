import { Router } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
  http://localhost:3001/api/weather/
  router.post('/', async (req, res) => {
try {
  // TODO: GET weather data from city name
  const currentWeather = await WeatherService.getWeatherForCity(req.body.cityName);
  res.status(200).send(currentWeather);


  // TODO: save city to search history
 router.get('/history', async (_req, res) => {
  const cities = await HistoryService.getCities();
  res.status(200).send(cities);
}
});

// TODO: GET search history
http://localhost:3001/api/weather/history/
router.get('/history', async (req, res) => {
  try {
    const savedCity = await WeatherService.Weather();
    res.json(savedCity);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/history', async (_req: Request, res: Response) => {
  try {
    const savedStates = await HistoryService.getStates();
    res.json(savedStates);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => {
  const id = req.params.id;
  await HistoryService.removeCity(id);
  res.status(202).send();
//   }
// });

export default router;
