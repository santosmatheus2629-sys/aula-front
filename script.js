function cliqueBotao() {
    inputCEP = document.getElementById('inputcep')

  response =await  fetch('https://brasilapi.com.br/api/cep/v1/+inputCEP.value')

  JSON = await response.JSON();
     
        console.log(JSON);
)  
}

cidade = document.getElementById('cidade');
uf = document.getElementById('uf');
endereco = document.getElementById('endereco');
cep = document.getElementById('cep');

endereco.in
    
}