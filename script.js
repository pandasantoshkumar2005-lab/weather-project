const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const weather = document.getElementById("weather");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const weather_icon = document.getElementById("weather_icon");
const forecastContainer = document.getElementById("forecastContainer")

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '36ba71a471mshd79f8c54d55f408p19e5dbjsn447d817f12e0',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};
async function getWeather(city) {
	const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=5`;

    try {
    	const response = await fetch(url, options);
    	const result = await response.json();

    	cityName.textContent = result.location.name;
    	temperature.textContent = result.current.temp_c + "°C";
    	weather.textContent = result.current.condition.text;
    	humidity.textContent = result.current.humidity + "%";
    	wind.textContent = result.current.wind_kph + " km/h";
    	pressure.textContent = result.current.pressure_mb + " hPa";
		weather_icon.src = "https:" + result.current.condition.icon;

		forecastContainer.innerHTML = "";

		for(let i = 0; i< result.forecast.forecastday.length; i++){
			const day = result.forecast.forecastday[i];
			forecastContainer.innerHTML += `
    			<div class="col-md-4 col-6">
        			<div class="card text-center shadow forecast-card">
            			<div class="card-body">

                			<h5 class="forecast-day">${day.date}</h5>
                			<img src="https:${day.day.condition.icon}" class="forecast-icon">
                			<p class="forecast-temp">${day.day.avgtemp_c}°C</p>
                			<p>${day.day.condition.text}</p>
							<p> Max Temp: ${day.day.maxtemp_c}°C</p>
							<p> Min Temp: ${day.day.mintemp_c}°C</p>

							<hr>
							<p> <strong>Sunrise:</strong> ${day.astro.sunrise}</p>
							<p> <strong>Sunset:</strong> ${day.astro.sunset}</p>
						</div>
						</div>
					</div>
				</div>
				`;
			} 

    	console.log(result);
	}catch (error) {
    	console.log(error);
	}
};
searchBtn.addEventListener("click", () => {
	const city = cityInput.value;
	if(city === ""){
		alert("Please enter a city name");
		return;
	}
	
	getWeather(city);
});

