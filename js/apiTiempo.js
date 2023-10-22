let lon;
let lat;
let temperature = document.querySelector(".temp");
let sumary = document.querySelector(".sumary");
let loc = document.querySelector(".location");
let iconcode = document.querySelector(".iconcode");
const kelvin = 273.15;


window.addEventListener("load", () => {

    if (navigator.geolocation){

        navigator.geolocation.getCurrentPosition((position) => {

            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            //!ID API

            const api__id = "f22b4c1a7840c690ccfcbb7ca2634fb7";

            const url__base= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&`+`lon=${lon}&appid=${api__id}`;

            fetch(url__base)
            .then((response) => {
                // console.log("respuesta json")                
                return response.json();
            })         
            .then((data) => {
                // console.log("esta es la data")
                // console.log(data);
                temperature.textContent =
                    Math.floor(data.main.temp - kelvin) + "℃";
                sumary.textContent = data.weather[0].description;
                loc.textContent = data.name + "," + data.sys.country;
                var iconcode = data.weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                // console.log(iconurl);
                wicon.src=iconurl;
            })
        })
    }

});

