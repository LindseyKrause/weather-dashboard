
// deccf4a9d1ad781cea56007a1e378a5a
var searchButton = document.querySelector("#searchButton");
var userInput = document.getElementById("userSearch");
$(searchButton).click(function() {
    console.log("search button clicked"); 
    console.log(userInput.value);
})
fetch(
	'http://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=3f8b7d7282213e928cf632d579aeff2d'
)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data);
	});
 