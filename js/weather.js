const API_KEY = "961324830d532de52b2432e36bef6afd";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(currentWeatherUrl)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const cityName = document.querySelector("#weather span:last-child");
            weather.innerText = data.weather[0].main;
            cityName.innerText = data.name;            
        });
}

function onGeoFail() {
    alert("Can't find weather information for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);