'use strict'; // modo restrito

// este modo faz com que javascript opere de formula mais segura e rigorosa ajudando a evitar erros comuns de programacao

//* consumo de API - https://viacep.com.br/ */

const limparformulario = () =>{
   document.getElementById('CEP').value = '';
   document.getElementById('RUA').value = '';
   document.getElementById('LOGRADOURO').value = '';
   document.getElementById('UF').value = '';

}
// length e uma propriedade que indentifica a quantidade de caracteres dentro do argumento cep

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

