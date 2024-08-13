import { Router } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
  http://localhost:3001/api/weather/
  router.post('/', async (req, res) => {
try {
  // TODO: GET weather data from city name
  const cityName = req.body.cityName;
  const weatherData = await WeatherService.getWeather(cityName);


  // TODO: save city to search history
 await HistoryService.addCity(req.body.cityName);
 res.json(weatherData);
} catch (err) {
  console.log(err);
  res.status(500).json(err);
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

router.get('/', async (_req: Request, res: Response) => {
  try {
    const savedStates = await HistoryService.getStates();
    res.json(savedStates);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // * BONUS TODO: DELETE city from search history
// router.delete('/history/:id', async (req, res) => {
//   try {
//     await HistoryService.deleteCity(req.params.id);
//     res.json({ message: 'City deleted' });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

export default router;
