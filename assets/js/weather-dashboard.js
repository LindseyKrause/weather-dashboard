
// deccf4a9d1ad781cea56007a1e378a5a
cityDisplay = document.getElementById("todayRow");

$("#searchButton").click(function () {
	var userInput = document.getElementById("userSearch");
	console.log("search button clicked");
	console.log(userInput.value);
	searchWeather(userInput.value);
})
function searchWeather (cityName){
	fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3f8b7d7282213e928cf632d579aeff2d&units=imperial`
	)
		.then(response => {
			return response.json();
		}).then(data => {
			console.log(data);
		})
		.catch(err => {
			console.error(err);
		});
	
}




	// 	response.text().then(function(text) {
	// 		cityDisplay.textContent = text;
	// 	})

	// .then(function (data) {
	// 	console.log(data);
	// })
