const API_KEY = 'c3767e4a66c74d2dff1f04eec2f6c149';

function onSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  fetch(url)
  .then((Response) => Response.json())
  .then(data => {
    const geo = document.querySelector('.weather-area .geo');
    const temp = document.querySelector('.weather-area .temp');
    const weather = document.querySelector('.weather-area .weather');

    const city = data.name;
    const api_temp = data.main.temp;
    const api_weather = data.weather[0].main;

    geo.innerText = city;
    temp.innerText = api_temp;
    weather.innerText = api_weather;
  });
}

function onError() {
  console.log("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);
