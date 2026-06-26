const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const weather = document.getElementById("weather");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");


const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '36ba71a471mshd79f8c54d55f408p19e5dbjsn447d817f12e0',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};
async function getWeather(city) {
	const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;

    try {
		const response = await fetch(url, options);
		const result = await response.json();
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

