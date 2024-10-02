# CADASTRO DE ENDEREÇO

## 🚀 Começando

 O projeto se consiste em cadastrar um formulario de endereço.
 
 * As informacoes necessarias sao:

>* ``cep: Campo para inserir o código postal logradouro ou rua``

>* ``Complemento: Campo para informações adicionais (ex: apartamento, bloco).´`

>* ``Número: Campo para o número do endereço.`´

>* ``Bairro: Campo para o nome do bairro.``

>* ``Localidade: Campo para o nome da cidade.``

>* ``UF: Campo para estado.``


### 📋 requisitos

Um dos requisitos e colocar todas as informacoes necessarias.

### 📋 informaçoes

caso falte alguma informacao, ou conste algo de errado, sera notificado.

### 📋 notificacoes

sera notificado caso o campo cep nao estejam completos

![](Captura%20de%20tela%202024-09-27%20091217.png)


### 📋 auxilio

com a insercao do cep, sera preenchido automaticamente, facilitando o cadastro do usuario.

### funcionalidades do Java 🔧 


1-Limpar Formulário:
2-Validação de CEP:
3-Preenchimento Automático: 
4-Consumo de API: 
5-Tratamento de Erros: O script alerta o usuário caso o CEP não seja encontrado ou seja inválido.

### Dar exemplos 📋

1 -  A função limparFormulario é responsável por limpar todos os campos do formulário.

2 -  O script verifica se o CEP inserido é válido (8 dígitos numéricos).

3 -  A função preencherFormulario preenche os campos do formulário com os dados retornados pela API

4 -  A função pesquisarCep realiza uma chamada à API ViaCEP e processa os dados recebidos.

5 -  O script alerta o usuário caso o CEP não seja encontrado ou seja inválido


Termine com um exemplo de como obter dados do sistema ou como usá-los para uma pequena demonstração.

## ⚙️ Executando os testes

entre na tela de formulario, digite todos os campos e aperte em salvar.

### 🔩 qual o motivo do cadastro

Encontrar o endereço, ter uma agilidade maior para as empresas que fazem entrega em questao de localizacao e facilitar a vida do usuario. 

## 📦 tecnologias

- HTML5
- java script
- css
- API 


## 🛠️ Conclusao

>* `` Este formulário de cadastro de endereço é simples porem cumpre com oque promete.

 Ele utiliza HTML e Bootstrap para proporcionar uma interface amigável e eficaz.

 Ele permite que os usuários coloquem os dados de endereço de forma clara e organizada.
 
  O JavaScript associado (não mostrado aqui) pode adicionar funcionalidades interativas, como validação de campos e integração com APIs para preencher automaticamente os campos com informações de endereço a partir do CEP.


## 🖇️ partes do codigo

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

## 📌 explicaçao

A função limparFormulario é um campo de um formulário estejam vazios, facilitando a interação do usuário com a aplicação. Essa abordagem melhora a experiência do usuário ao permitir que ele reinicie rapidamente a entrada de inforçoes.

## 📌 foto do projeto

![](Captura%20de%20tela%202024-09-27%20091019.png)

## ✒️ Autores

Francisco
