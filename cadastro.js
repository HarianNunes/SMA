document.getElementById('cadastro').addEventListener('click', function() {
  // Obtém os valores dos campos
  const nome = document.getElementById("user-name").value;
  const email = document.getElementById("user-email").value;
  const senha = document.getElementById("user-password").value;
  const segundaSenha = document.getElementById("user-secound-password").value;
  const cep = document.getElementById("user-cep").value;
  var cidade = '';
  const urlCep = `https://viacep.com.br/ws/${cep}/json/`
  fetch(urlCep)
  .then(response => response.json())
  .then(response => {
    cidade = response.localidade;
    const apiKey = '178223cea1554caf99b124830230106 '
    const urlWeather = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}`;

  fetch(urlWeather)
  .then(response => response.json())
  .then(response => {
    const umidade = response.current.humidity;
    const cityName = response.location.name;
    const city = [];
    const cityInfo = {
      umidade: umidade,
      cidade: cityName
    }
    city.push(cityInfo);
    localStorage.setItem('Umidade', JSON.stringify(city));
  })
  })


  
  // Cria um objeto com as informações do usuário
  const usuario = {
    nome,
    email,
    senha,
    segundaSenha,
    cep
  };

  // Verifica se já existe uma lista de usuários no LocalStorage
  var usuarios = localStorage.getItem("usuarios");
  if (usuarios) {
    // Se existir, converte a lista de usuários para um array
    usuarios = JSON.parse(usuarios);
  } else {
    // Se não existir, cria um novo array de usuários
    usuarios = [];
  }

  // Adiciona o novo usuário à lista
  usuarios.push(usuario);

  // Salva a lista de usuários atualizada no LocalStorage
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
  // Limpa os campos do formulário
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
  document.getElementById("cep").value = "";




})
  
    
  