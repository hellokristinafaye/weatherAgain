const apiKey = "fd46e559e756677d1690fefd352bbc16";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    // to display the weather data in the console
    console.log(data);
    // to display the weather data bits in the app via querySelector
    document.querySelector(".city").innerHTML = data.name;
}

checkWeather()