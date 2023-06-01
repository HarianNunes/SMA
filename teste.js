fetch('http://api.weatherapi.com/v1/current.json?key=178223cea1554caf99b124830230106&q=Aquidauana')
.then(response => response.json())
.then(response => console.log(response))