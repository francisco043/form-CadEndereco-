* # Cadastro de Endereço


## 🚀 Começando

 O projeto se consiste em cadastrar um formulario de endereço.
 
 * ``As informações necessarias são:``

>* ``cep: Campo para inserir o código postal logradouro ou rua``

>* ``Complemento: Campo para informações adicionais (ex: apartamento, bloco).``

>* ``Número: Campo para o número do endereço.``

>* ``Bairro: Campo para o nome do bairro.``

>* ``Localidade: Campo para o nome da cidade.``

>* ``UF: Campo para estado.``


## 📋 Requisitos

Um dos requisitos e colocar todas as informações necessarias.

## 📋 Informações

caso falte alguma informação, ou conste algo de errado, sera notificado.

## 📋 Notificações

sera notificado caso o campo cep nao estejam completos

![](Captura%20de%20tela%202024-09-27%20091217.png)


## 📋 Auxilío

com a inserção do cep, sera preenchido automaticamente, facilitando o cadastro do usuario, ou feito manualmente.

## Funcionalidades do Java-Script 🔧


* 1- Limpar Formulário:

* 2- Validação de CEP:

* 3- Preenchimento Automático: 

* 4- Consumo de API: 

* 5- Tratamento de Erros: O script alerta o usuário caso o CEP não seja encontrado ou seja inválido.

# Exemplos 📋


* 1 -  A função limparFormulario é responsável por limpar todos os campos do formulário.

* 2 -  O script verifica se o CEP inserido é válido (8 dígitos numéricos).

* 3 -  A função preencherFormulario preenche os campos do formulário com os dados retornados pela API

* 4 -  A função pesquisarCep realiza uma chamada à API ViaCEP e processa os dados recebidos.

* 5 -  O script alerta o usuário caso o CEP não seja encontrado ou seja inválido

# 🖇️ Partes do Código

~~~ JavaScript

// Função para limpar formulário
const limparFormulario = () => {
    document.getElementById('logradouro').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('complemento').value = '';
    
}
~~~

## 📌 Explicação do Código

>* ``A função limparFormulario é um campo que esta vazio, facilitando a interação do usuário com a aplicação. Essa abordagem melhora a experiência do usuário ao permitir que ele reinicie rapidamente a entrada de informaçoes.

##  Funções utilizadas

📌 fetch-
 
📌 json-
  
📌 addres
 
📌 hasOwnproperty-
 
📌 addEventlistener-

# Explicação 📋

* 🖇️ O Fetch é uma API do JavaScript que permite realizar requisições HTTP de forma simples e intuitiva. É comumente usado para buscar dados de uma API. Ele retorna uma Promise, que resolve para a resposta da requisição
 
* 🖇️ O método HasOwnProperty é utilizado em objetos JavaScript para verificar se uma propriedade específica pertence ao próprio objeto, e não à sua cadeia de protótipos.

* 🖇️O método AddEventListener é usado para adicionar um ouvinte de eventos a um elemento do DOM. Ele permite que você escute e responda a eventos como cliques, teclas pressionadas, entre outros.

* 🖇️O metodo JSon e um formato leve de troca de dados que é fácil para humanos lerem e escreverem, além de ser fácil para máquinas parsearem e gerarem.

* 🖇️ O metodo Address fornece informações de contato para seu ancestral <article> ou <body>.

# ⚙️ Executando os códigos

Entre na tela de formulario, digite todos os campos e aperte em salvar.

## 📌 Foto da interface:

![](Captura%20de%20tela%202024-09-27%20091019.png)



## 🔩 Quais motivos do cadastro?

Encontrar o endereço, ter uma agilidade maior para as empresas que fazem entrega em questao de localizacao e facilitar a vida do usuario. 

# 🛠️ Conclusão

>* `` Este formulário de cadastro de endereço é simples porem cumpre com oque promete.

 >* ``Ele utiliza HTML e Bootstrap para proporcionar uma interface amigável e eficaz.

 >* ``Ele permite que os usuários coloquem os dados de endereço de forma clara e organizada.
 

#  📦 Tecnologias

- HTML5
- JAVA-SCRIPT
- CSS
- API - https://viacep.com.br/
- BOOTSTRAP
- HTML
- GIT HUB






## Fontes

- CHAT
- GLOGLE 
- MDN WEB DOCS_

# Autor

- [Fransisco Maimone](https://github.com/francisco043)

