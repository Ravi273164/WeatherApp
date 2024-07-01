const apikey="c042ac0e884737ba0ca0f06a8cedf9fc";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkweather(){
    var cityname=document.querySelector('.cityname').value;
    const response =await fetch(apiurl+`&q=${cityname}&appid=${apikey}`);
    if(response.status==404){
        document.querySelector('.error').classList='error';
        document.querySelector('.weather').classList="weather1 weather";
    }
    else{
        var data=await response.json();
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('.wind').innerHTML=data.wind.speed+" km/hr";

    if(data.weather[0].main=='Clouds'){
        document.querySelector('.weather-icon').src="Clouds.png";
    }
    else if(data.weather[0].main=='Clear'){
        document.querySelector('.weather-icon').src="clear.png";
    }
    else if(data.weather[0].main=='Rain'){
        document.querySelector('.weather-icon').src="rain.png";
    }
    else if(data.weather[0].main=='Mist'){
        document.querySelector('.weather-icon').src="mist.png";
    }
    else if(data.weather[0].main=='Drizzle'){
        document.querySelector('.weather-icon').src="drizzle.png";
    }
    else if(data.weather[0].main=='Snow'){
        document.querySelector('.weather-icon').src="snow.png";
    }
    document.querySelector('.weather').classList="weather";
    document.querySelector('.error').classList='error1 error';
    } 
}
