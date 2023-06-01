document.getElementById('logar').addEventListener('click', function(){
  var email = document.getElementById("user-mail").value;
    var senha = document.getElementById("user-password").value;
  
    var usuarios = JSON.parse(localStorage.getItem("usuarios"));
    if (usuarios) {
      var usuarioEncontrado = usuarios.find(function(usuario) {
        return usuario.email === email && usuario.senha === senha;
      });
  
      if (usuarioEncontrado) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
        
        
        var cep = usuarioEncontrado.cep;
  
      
        window.location.href = "./home.html";
      } else {
        alert("Credenciais inválidas! Por favor, verifique seu email e senha.");
      }
    } else {
      alert("Nenhum usuário cadastrado. Por favor, registre-se antes de fazer login.");
    }
})
    

  