

fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
        document.querySelector('#quote').innerHTML = `${data.content}`;
        document.querySelector('#author').innerHTML = `${data.author}`;
  })
  .catch(err => console.log(err))




const date = new Date();
const hour = date.getHours();
const min = date.getMinutes();


function displayTime() {
      console.log(hour, min);
}

displayTime();
