'use strict'; // modo restrito

// este modo faz com que javascript opere de formula mais segura e rigorosa ajudando a evitar erros comuns de programacao

//* consumo de API - https://viacep.com.br/ */

const limparformulario = () =>{

   document.getElementById('cep').value = '';
   document.getElementById('rua').value = '';
   document.getElementById('logradouro').value = '';
   document.getElementById('uf').value = '';

}
// length e uma propriedade que indentifica a quantidade de caracteres dentro do argumento cep

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//funcao para preencher formulario como campos da API

const preencherformulario = (endereco)=> {
    document.getElementById('LOGRADOURO').value = endereco.logradouro;
    document.getElementById('LOGRADOURO').value = endereco.bairro;
    document.getElementById('LOGRADOURO').value = endereco.localidade;
    document.getElementById('LOGRADOURO').value = endereco.uf;



}

