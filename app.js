const api_key = "ab55962a39c2ff0125e4924f3f8b4a51";
var city = document.getElementById("city_input");
var city_name = city.value;

var weather = document.getElementById("weatherdat");
var search=document.getElementById("searchbtn");



getweather = () => {
    var city_name = city.value;
    //if city name is empty
    if (city_name.length == 0) {
        weather.innerHTML = `<h3 class="cityname">Enter city</h3>`

    }
    else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                weather.innerHTML = `
                <h3 class="cityname">${data.name}</h3>
                <p class="des1">${data.weather[0].main}</p>
                <p class="des2">${data.weather[0].description}</p>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="">
                <h1 class="temp">${data.main.temp} &#176</h1>
                <div class="minmax">
                    <div class="min"><span>Min - </span>${data.main.temp_min} &#176</div>
                    <div class="max"><span>Max - </span>${data.main.temp_max} &#176</div>
                </div>
                `

            })
            .catch(() => {
                weather.innerHTML = `<h3 class="cityname">City Not Found</h3>`


            })
    }

}
search.addEventListener("click",getweather);
window.addEventListener("load", getweather);
