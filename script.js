function logar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    
    if(email == "sgabriel.oliveira33@gmail.com" && senha == "Gabriel"){
        alert('sucesso');
    }
    else{
        alert('email ou senha incorretos!');
    }
}
document.getElementById('email').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        logar();  // Chama a função logar() quando Enter é pressionado
    }
});

document.getElementById('senha').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        logar();  // Chama a função logar() quando Enter é pressionado
    }
});