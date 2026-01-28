function sayHi() {
    alert("Hello world");
}


const api=
 "https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}";
const api_key="446ec234e6c6110fa12f8d37958bd784";

const inputvalue =document.querySelector(".input");
const windspeed=document.querySelector(".windspeed");
const desc =document.querySelector(".desc");
const temp =document.querySelector(".temp");

function input(e){
    e.preventDefault();
   const word = document.querySelector("#inputvalue").value;
  //console.log(word);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${api_key}`
  )
   .then((res)=>{
      return res.json()
   })
   .then((data)=>{
     //console.log(data);
     var descp=data.weather[0].description;
     var tempt=data.main.temp;
     var windspd=data.wind.speed;

     windspeed.innerHTML="windspeed:" + windspd;
     desc.innerHTML="Description:" + descp;
     temp.innerHTML="Temperature:"+ Math.floor(tempt-273.15) ;
  });  
}

inputvalue.addEventListener("submit",input);

