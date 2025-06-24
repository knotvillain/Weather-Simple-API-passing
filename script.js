function getWeather() {
  const cityInput = document.getElementById("cityInput").value.trim();
  const weatherInfo = document.getElementById("weatherInfo");

  const mockWeatherData = {
    manila: { temp: 31, condition: "Partly Cloudy" },
    tokyo: { temp: 25, condition: "Sunny" },
    london: { temp: 18, condition: "Rainy" },
    newyork: { temp: 22, condition: "Overcast" }
  };

  if (!cityInput) {
    weatherInfo.innerText = "Please enter a city name.";
    return;
  }

  const cityKey = cityInput.replace(/\s+/g, '').toLowerCase();
  const displayName = cityInput.charAt(0).toUpperCase() + cityInput.slice(1);

  const weather = mockWeatherData[cityKey];

  if (weather) {
    weatherInfo.innerHTML = `
      ${displayName}<br>
      ${weather.temp}°C<br>
      ${weather.condition}
    `;
  } else {
    weatherInfo.innerText = "City not found in mock data.";
  }
}
