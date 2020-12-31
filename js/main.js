

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
        
        
        if (hours > 12) {
              hours = hours - 12;
              ampm = 'pm';
        } else { ampm = 'am' };
        
        if (minutes < 10) {
              minutes = '0' + minutes;
        };
        
        if (seconds < 10) {
              seconds = '0' + seconds;
        };

      document.querySelector('#hours').innerHTML = `${hours}`;
      document.querySelector('#minutes').innerHTML = `${minutes}`;
      document.querySelector('#seconds').innerHTML = `${seconds}`;
      document.querySelector('#ampm').innerHTML = `${ampm}`;
}


setInterval(displayTime, 1000);
