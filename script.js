const apiKey = "fd46e559e756677d1690fefd352bbc16";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    // to display the weather data in the console
    console.log(data);
    // to display the weather data bits in the app via querySelector
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
}
// to send input box value to the checkWeather function (and run it) when the user clicks the button
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
// enables hitting "Enter" to run the search
searchBox.addEventListener("keypress", 
    function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkWeather(searchBox.value);
        }
    }
)
