window.addEventListener("DOMContentLoaded", function() {
    // Obtém o CEP do LocalStorage
    var usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (usuarioLogado && usuarioLogado.cep) {
      var cep = usuarioLogado.cep;
  
      var viaCepUrl = `https://viacep.com.br/ws/${cep}/json/`;
  console.log(cep);
      fetch(viaCepUrl)
        .then(response => response.json())
        .then(response => {
          var cidade = response.localidade;
            console.log(cidade);
          var key = 'e7613d36b0764727b7d140431230106';
          var weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${cidade}`;
  console.log(weatherUrl);
          return fetch(weatherUrl);
        })
        .then(response => response.json())
        .then(response => {
          var ar = response.current.humidity + '%';
          console.log(ar);
  
          // Inserir os dados climáticos na div "dadosClimaticos"
          var dadosClimaticosDiv = document.getElementById("dadosClimaticos");
          dadosClimaticosDiv.innerHTML = `Dados climáticos:<br>Umidade: ${ar}`;
        })
        .catch(error => {
          console.error(error);
        });
    }
  });
  