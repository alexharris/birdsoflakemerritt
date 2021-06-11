



(function() {

    var myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", "l74e03ri8jei");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };
    
    fetch("https://api.ebird.org/v2/data/obs/L268122/recent?back=30", requestOptions)
      .then(response => response.json())
      .then(result => showBirds(result))
      .catch(error => console.log('error', error));

    fetch("https://api.weather.gov/gridpoints/MTR/89,104/forecast")
    .then(response => response.json())
    .then(result => showWeather(result.properties.periods[0]))

     
 })();

function showBirds(birds) {
    console.log(birds)
    var tbodyRef = document.getElementById('ebird').getElementsByTagName('tbody')[0];
    for (let i = 0; i < birds.length; i++) {
        
        // Insert a row at the end of table
        var newRow = tbodyRef.insertRow();
        
        // Insert a cell at the end of the row
        var newCell = newRow.insertCell();
        
        // Append a text node to the cell
        var newText = document.createTextNode(birds[i].comName);
        newCell.appendChild(newText);
        
        var newCell2 = newRow.insertCell();
        var newText2 = document.createTextNode(birds[i].howMany);
        newCell2.appendChild(newText2);
    }
      
 }

 function showWeather(forecast) {
     console.log(forecast)
     document.getElementById('forecast-name').textContent = forecast.name
     document.getElementById('short-forecast').textContent = forecast.shortForecast
     document.getElementById('temperature').textContent = forecast.temperature
     document.getElementById('wind-speed').textContent = forecast.windSpeed
     document.getElementById('weather-icon').src = forecast.icon

 }

//L268122
//  l74e03ri8jei

// https://api.weather.gov/gridpoints/MTR/89,104/forecast