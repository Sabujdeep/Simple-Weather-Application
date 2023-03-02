const APIKEY = "3451ff8d2872ea723d12394e80731e02"
let time = document.getElementsByClassName("date");
var text = document.getElementById("h");
var texb = document.querySelector("#i");
var texc = document.querySelector("#j");
var button = document.querySelector("#submit");
var input = document.querySelector("#location");
var name1 = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')


var hour_1 = document.querySelector('#hour')
var second_1 = document.querySelector('#second_1')
var second_2 = document.querySelector('#second_2')

function ztime() {
    // gets the time and date information from the Date() function
    date = new Date();
    // get the hour from the getHours()
    hour = date.getHours();
    //gets the minutes from the getMinutes()
    minutes = date.getMinutes();
    //gets the seconds from the getSecond()
    seconds = date.getSeconds();

    //storing the AM/PM in a variabe
    period = "";

    //Assiging the AM/PM according to the hour
    if (hour >= 12) {
        period = "PM";
    }
    else {
        period = "AM";
    }

    //coverting into 12 hour format
    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
    }
    hour = String(hour).padStart(2, '0')
    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, '0')

    // text.innerHTML = hour + " : " + minutes;
    // texb.innerHTML = seconds + ' ' + period ;
    // texc.innerHTML = period ;




    hour_1.innerHTML = hour + '  : ' + minutes
    second_1.innerHTML = seconds
    second_2.innerHTML =  period
}

setInterval(ztime, 1000)
ztime();


function description(){
    cityName = input.value;
    console.log(cityName);
    getWeather();
}

function addEnter(event){
    if(input.value.length > 0 && event.key == "Enter"){
        cityName = input.value;
        console.log("hello")
        getWeather();
        input.value ="";
    }
}


function getWeather(){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`;
    
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {

        if (data['cod'] == 200) {
            console.log(data);
            // console.log(data['name'])
            // console.log(data['main']['temp'])
            // console.log(data['weather'][0]['main'])
            name1.innerHTML = data['name'];
            desc.innerHTML = data['weather'][0]['main']
            temperature = data['main']['temp'] - 273;
            temperature = temperature.toFixed(2);
            temp.innerHTML = temperature + " °C";
        }
        else {
            alert("Invalid City name!")
        }
    });
}

button.addEventListener("click", description)
input.addEventListener("keypress", addEnter)


// var city = "Kolkata";



    


