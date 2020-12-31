fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
            document.querySelector('#quote').innerHTML = `${data.content}`;
            document.querySelector('#author').innerHTML = `${data.author}`;
      })
      .catch(err => console.log(err))

function displayTime() {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let ampm = '';
      let greeting = '';

      if (hours > 12) {
            hours = hours - 12;
            ampm = 'pm';
            greeting = 'Good afternoon';
      } else {
            ampm = 'am';
            greeting = 'Good morning';
      };

      if (minutes < 10) {
            minutes = '0' + minutes;
      };

      if (seconds < 10) {
            seconds = '0' + seconds;
      };

      if (hours > 6 && ampm == 'pm') {
            greeting = 'Good evening';
      };

      document.querySelector('#clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${ampm}`;
      document.querySelector('#greeting').innerHTML = `${greeting}`;
};

setInterval(displayTime, 1000);

const apiSite = 'https://api.openweathermap.org/data/2.5/weather'
const city = '?q=Vancouver';
const weatherApiKey = '&appid=d92a5c0540378953fe9c8eb9a2a9db57';
const units = '&units=metric'
const apiUrl = apiSite + city + weatherApiKey + units;

console.log(apiUrl);

fetch(apiUrl)
      .then(res => res.json())
      .then(data => {

            document.querySelector('#mainTemperature').innerHTML = `Temp ${data.main.temp}&#x2103;`;
            document.querySelector('#feelsLike').innerHTML = `Feels like ${data.main.feels_like}&#x2103;`;
            document.querySelector('#weatherDescription').innerHTML = data.weather[0].description;
            document.querySelector('#iconWeather').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

      })
      .catch(err => console.log(err))
