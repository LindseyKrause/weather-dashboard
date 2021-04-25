
// deccf4a9d1ad781cea56007a1e378a5a
cityDisplay = document.getElementById("todayRow");
// var currentDate = new Date(dateString);
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
	cityHeading.textContent = d.name;
	let temp = document.getElementById('temp');
	temp.textContent = "Temp: " + d.main.temp;
	let humidity = document.getElementById('humidity');
	humidity.textContent = "Humidity: " + d.main.humidity;
	let wind = document.getElementById('windSpeed');
	wind.textContent = "Wind: " + d.wind.speed;
	let uv = document.getElementById('uv');
	let imgCont = document.querySelector("#todayImgCol .figure");
	imgCont.innerHTML = "";
	let img = document.createElement('img');
	img.setAttribute('src', `http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`);
	imgCont.appendChild(img);
}
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
		let cardHead1 = document.getElementById('cardTitleId1');
		cardHead1.textContent = d.city.name;
		let p1 = document.getElementById('cardTextId1');
		p1.textContent = "Temp: " + d.list[0].main.temp + "   Humidity: " + d.list[0].main.humidity + "   Wind: " + d.list[0].wind.speed;

		let cardHead2 = document.getElementById('cardTitleId2');
		cardHead2.textContent = d.city.name;
		let p2 = document.getElementById('cardTextId2');
		p2.textContent = "Temp: " + d.list[1].main.temp + "   Humidity: " + d.list[1].main.humidity + "   Wind: " + d.list[1].wind.speed;

		let cardHead3 = document.getElementById('cardTitleId3');
		cardHead3.textContent = d.city.name;
		let p3 = document.getElementById('cardTextId3');
		p3.textContent = "Temp: " + d.list[2].main.temp + "   Humidity: " + d.list[2].main.humidity + "   Wind: " + d.list[2].wind.speed;

		let cardHead4 = document.getElementById('cardTitleId4');
		cardHead4.textContent = d.city.name;
		let p4 = document.getElementById('cardTextId4');
		p4.textContent = "Temp: " + d.list[3].main.temp + "   Humidity: " + d.list[3].main.humidity + "   Wind: " + d.list[3].wind.speed;

		let cardHead5 = document.getElementById('cardTitleId5');
		cardHead5.textContent = d.city.name;
		let p5 = document.getElementById('cardTextId5');
		p5.textContent = "Temp: " + d.list[4].main.temp + "   Humidity: " + d.list[4].main.humidity + "   Wind: " + d.list[4].wind.speed;

	}


}


// let cardDiv = document.getElementById("dayOne");
// let createCard = document.createElement('div');
// createCard.className = 'card';
// let createCardBody = document.createElement('div');
// createCardBody.className = 'card-body';
// let createCardTitle = document.createElement('h5');
// createCardTitle.className = 'card-title';
// createCardTitle.innerText = d.city.name;
// let createCardP = document.createElement('p');
// createCardP.className = 'card-text';
// let createCardBtn = document.createElement('button');
// createCardBtn.className = 'btn btn-primary';

// cardDiv.appendChild(createCard, createCardBody);
// createCardBody.appendChild(createCardTitle, );
// createCardTitle.textContent = "this is something";
// createCardP.textContent = 'this is example text'




