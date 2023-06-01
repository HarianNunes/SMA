function exibirDadosClimaticos() {
    var cep = obterCepDoCadastro();
  
    if (cep) {
      var viaCepUrl = `https://viacep.com.br/ws/${cep}/json/`;
  
      fetch(viaCepUrl)
        .then(response => response.json())
        .then(response => {
          cidade = response.localidade;
  
          const key = 'e7613d36b0764727b7d140431230106';
          const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${cidade}`;
  
          return fetch(weatherUrl);
        })
        .then(response => response.json())
        .then(response => {
          ar = response.current.humidity + '%';
          console.log(ar);
  
          // Inserir os dados climáticos na div "dadosClimaticos"
          var dadosClimaticosDiv = document.getElementById("dadosClimaticos");
          dadosClimaticosDiv.innerHTML = `Dados climáticos:<br>Cidade: ${cidade}<br>Umidade: ${ar}`;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
  
    var usuarios = localStorage.getItem("usuarios");
    if (usuarios) {
      usuarios = JSON.parse(usuarios);
  
      var usuarioEncontrado = usuarios.find(function(usuario) {
        return usuario.email === email && usuario.senha === senha;
      });
  
      if (usuarioEncontrado) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
        window.location.href = "home.html";
      } else {
        alert("Credenciais inválidas! Por favor, verifique seu email e senha.");
      }
    } else {
      alert("Nenhum usuário cadastrado. Por favor, registre-se antes de fazer login.");
    }
  });
  
  // Chamar a função exibirDadosClimaticos quando a página "home" for carregada
  if (window.location.href.includes("home.html")) {
    exibirDadosClimaticos();
  }
  