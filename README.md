# CADASTRO DE ENDEREÇO

## 🚀 COMEÇANDO

 O projeto se consiste em cadastrar um formulario de endereço.
 
 * As informacões necessarias são:

>* ``cep: Campo para inserir o código postal logradouro ou rua``

>* Complemento: Campo para informações adicionais (ex: apartamento, bloco).

>* ``Número: Campo para o número do endereço.`´

>* ``Bairro: Campo para o nome do bairro.``

>* ``Localidade: Campo para o nome da cidade.``

>* ``UF: Campo para estado.``


## 📋 REQUISITOS

Um dos requisitos e colocar todas as informações necessarias.

## 📋 INFORMAÇÕES

caso falte alguma informação, ou conste algo de errado, sera notificado.

## 📋 NOTIFICAÇÕES

sera notificado caso o campo cep nao estejam completos

![](Captura%20de%20tela%202024-09-27%20091217.png)


## 📋 AUXILÍO

com a inserção do cep, sera preenchido automaticamente, facilitando o cadastro do usuario.

## FUNCIONALIDADE DO JAVA-SCRIPT 🔧 

1-Limpar Formulário:

2-Validação de CEP:

3-Preenchimento Automático: 

4-Consumo de API: 

5-Tratamento de Erros: O script alerta o usuário caso o CEP não seja encontrado ou seja inválido.

# EXEMPLOS 📋


1 -  A função limparFormulario é responsável por limpar todos os campos do formulário.

2 -  O script verifica se o CEP inserido é válido (8 dígitos numéricos).

3 -  A função preencherFormulario preenche os campos do formulário com os dados retornados pela API

4 -  A função pesquisarCep realiza uma chamada à API ViaCEP e processa os dados recebidos.

5 -  O script alerta o usuário caso o CEP não seja encontrado ou seja inválido


Termine com um exemplo de como obter dados do sistema ou como usá-los para uma pequena demonstração.

# ⚙️ EXECUTANDO OS TESTES

entre na tela de formulario, digite todos os campos e aperte em salvar.

## 🔩 QUAIS MOTIVOS DO CADASTRO?

Encontrar o endereço, ter uma agilidade maior para as empresas que fazem entrega em questao de localizacao e facilitar a vida do usuario. 

#  📦 TECNOLOGIAS

- HTML5
- JAVA-SCRIPT
- CSS
- API 
- BOOTSTRAP
- HTML
- GIT HUB


# 🛠️ CONCLUSÃO

>* `` Este formulário de cadastro de endereço é simples porem cumpre com oque promete.

 >* ``Ele utiliza HTML e Bootstrap para proporcionar uma interface amigável e eficaz.

 >* ``Ele permite que os usuários coloquem os dados de endereço de forma clara e organizada.
 
  >* ``O JavaScript associado (não mostrado aqui) pode adicionar funcionalidades interativas, como validação de campos e integração com APIs para preencher automaticamente os campos com informações de endereço a partir do CEP.


# 🖇️ PARTES DO CODIGO

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

## 📌 EXPLICAÇÃO

>* ``A função limparFormulario é um campo que estao vazios, facilitando a interação do usuário com a aplicação. Essa abordagem melhora a experiência do usuário ao permitir que ele reinicie rapidamente a entrada de informaçoes.

## 📌 FOTO DO PROJETO

![](Captura%20de%20tela%202024-09-27%20091019.png)




