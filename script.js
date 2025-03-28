const apiKey = "fd46e559e756677d1690fefd352bbc16";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiUrlImperial = "https://api.openweathermap.org/data/2.5/weather?units=Imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


// so the return button works inside the input box
// UM... we gotta revisit the code below because THIS event listener works, but the ones in place inside the functions (uncommented)don't really work???? and are slightly different so that might be hindering the functionality there. (3/22/25)
// document.addEventListener("keydown", event => {
//     if (event.key === "Enter") {
//         checkWeather(searchBox.value);
//         event.preventDefault();
//     }
// })

// dark/light mode code 
var mySwitch = document.getElementById("my-switch");
mySwitch.onclick = function () {
//    tests onclick happening
    console.log("Click!")

// functionality of the switch! 
    if (mySwitch.checked) {
        console.log("Imperial")
        console.log()
        // to send input box value to the checkWeather function (and run it) when the user clicks the button
        searchBtn.addEventListener("click", () => {
            checkWeatherImperial(searchBox.value);
        })

        // enables hitting "Enter" to run the search
        searchBox.addEventListener("keypress",
            function (event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    checkWeatherImperial(searchBox.value);
                }
            }
        )
        
    } else {
        console.log("Metric");
        // console.log(Math.round(data.main.temp));
        // to send input box value to the checkWeather function (and run it) when the user clicks the button
        searchBtn.addEventListener("click", () => {
            checkWeatherMetric(searchBox.value);
        })

        // enables hitting "Enter" to run the search
        searchBox.addEventListener("keypress",
            function (event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    checkWeatherMetric(searchBox.value);
                }
            }
        )
    }
}
// end dark/light mode code

// Metric function Start
async function checkWeatherMetric(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
    
        // to display the weather data in the console
        console.log(data);
        // to display the weather data bits in the app via querySelector
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    
        // update image per condition
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        // clears searchbox upon search! 
        searchBox.value = "";
    
        // displays on search
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}
// Metric function End

// Imperial function start
async function checkWeatherImperial(city) {
    const response = await fetch(apiUrlImperial + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        // to display the weather data in the console
        console.log(data);
        // to display the weather data bits in the app via querySelector
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " m/hr";

        // update image per condition
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        // clears searchbox upon search! 
        searchBox.value = "";

        // displays on search
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}

// Imperial function end







// // // to send input box value to the checkWeather function (and run it) when the user clicks the button
// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// })

// // enables hitting "Enter" to run the search
// searchBox.addEventListener("keypress", 
//     function (event) {
//         if (event.key === "Enter") {
//             event.preventDefault();
//             checkWeather(searchBox.value);
//         }
//     }
// )
