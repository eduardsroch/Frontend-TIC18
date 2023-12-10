import { Advisor } from '@climatempo/advisor-sdk';

const advisor = new Advisor({
  key: '9c3e6962b09f46b3436906e7b4754f43',
});

const getWeather = async () => {
  const weather = await advisor.getWeather('Ilhéus', 'BA');

  const conditions = weather.weather.description;

  document.getElementById('weather-conditions').textContent = conditions;
};

getWeather();
