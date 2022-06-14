let weather = {
 "apiKey":"44a80cc4da90500985900aaf5eff46fb",
 fetchWeather: function(city){
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city +"units=metric&appid=44a80cc4da90500985900aaf5eff46fb"
    ).then((response) => response.json()) 
    .then((data) => console.log(data));
 },
 displayWeather: function(data) {
    const { name } = data;
    const {icon, description } = data.weather[0];
    const {temp, humidity } = data.main;
    const {speed} = data.wind;
    console.log(name,icon,description,temp,humidity,speed);
    document.querySelector(".city").innerText = "Weather in" + name;
    document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed" + speed + "km/h" ;



 },
 search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
 }

};

document.querySelector(".search button").addEventListener("click",function(){
 weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }

});

