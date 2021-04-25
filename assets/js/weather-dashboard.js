
// deccf4a9d1ad781cea56007a1e378a5a
cityDisplay = document.getElementById("todayRow");
var currentDate = new Date(dateString);
$("#searchButton").click(function () {
	var userInput = document.getElementById("userSearch");
	console.log("search button clicked");
	console.log(userInput.value);
	searchWeather(userInput.value);
	searchWeather5day(userInput.value);
})
function searchWeather(cityName) {
	fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3f8b7d7282213e928cf632d579aeff2d&units=imperial`
	)
		.then(response => {
			return response.json();
		}).then(data => {
			console.log(data);
			drawWeather(data);
		})
		.catch(err => {
			console.error(err);
		});

}
function drawWeather(d) {
	let returnColumn = document.getElementById('returnColumn');
	let cityHeading = document.getElementById('cityHeading');
	let temp = document.getElementById('temp');
	temp.textContent = "Temp: " + d.main.temp;
	let humidity = document.getElementById('humidity');
	let wind = document.getElementById('windspeed');
	let uv = document.getElementById('uv');
	let tempInfo = d.main.temp
	let p = document.createElement('p');
	let imgCont = document.querySelector("#todayImgCol .figure");
	imgCont.innerHTML = "";
	let img = document.createElement('img');
	img.setAttribute('src', `http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`);
	imgCont.appendChild(img);
}
// returnColumn.innerHTML = d.weather[0].description + "Temp" + d.main.temp + "Feels Like" + d.main.feels_like + "Temp Min" + d.main.temp_min + "Temp Max" + d.main.temp_max;
// document.getElementById('returnColumn').innerHTML = d.name;
// document.getElementById('returnColumn').innerHTML = d.main.temp;
// document.getElementById('returnColumn').innerHTML = d.main.feels_like;
function searchWeather5day(cityName) {
	fetch(
		`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=deccf4a9d1ad781cea56007a1e378a5a&cnt=5&units=imperial`
	)
		.then(response => {
			return response.json();
		}).then(data => {
			console.log("five day");
			console.log(data);
			draw5Weather(data);
		})
		.catch(err => {
			console.error(err);
		});

	function draw5Weather(d) {

	}

}






