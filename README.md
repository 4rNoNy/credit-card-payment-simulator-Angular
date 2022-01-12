## Avisos antes de começar
- Você poderá consultar o Google, Stackoverflow ou algum projeto particular na sua máquina.
- Fique tranquilo, respire, assim como você, também já passamos por essa etapa. Boa sorte! :)
 
## Setup do projeto

- Angular CLI: 8.3.18
- Node: 10.15.3
- Angular: 8.2.14

## Tecnologias envolvidas

- Git
- HTML
- CSS e SCSS
- Javascript e Typescript
- Angular

## Como rodar?

- De preferência instale o VS Code
- Instale as dependências usando o comando `npm install`
- Na raiz do repositório, rode este comando `ng serve` para iniciar o servidor de desenvolvimento.
- A Aplicação estará disponível na porta `http://localhost:4200/`

_Para executar os comandos citados acima, abra a pasta do projeto no VS Code e pressionar CTRL + '(ASPAS), irá abrir um prompt, execute nele os comandos_

## Objetivo

O objetivo é construir uma aplicação que simula o envio de dinheiro para uma outra pessoa, via cartão de crédito.

## Fluxo das telas

Na primeira tela terá uma listagem de usuários, onde a pessoa pode clicar em algum usuário da lista para realizar o pagamento. Quando clicado em um usuário é então aberto um modal de pagamento, contendo as informações do usuário de destino, a opção de selecionar um cartão de crédito e um botão de pagar. O usuário deve então digitar o valor, escolher o cartão e clicar em pagar. Para realização do pagamento deve-se chamar um endpoint de pagamento que aprovará/recusará a transação. E então deve-se mostrar na tela o modal de pagamento concluído com sucesso ou o de erro.

## Screenshots

### Lista de usuários

<img src="./screenshots/lista-usuarios.png" alt="Lista de usuários" style="width: 100%; max-width: 500px;">

### Modal de pagamento e listagem de cartões

<img src="./screenshots/modal-pagamento.png" alt="Modal de pagamento" style="width: 100%; max-width: 400px;">

### Modal de pagamento concluído com sucesso

<img src="./screenshots/modal-sucesso.png" alt="Modal de pagamento com sucesso" style="width: 100%; max-width: 400px;">

### Modal de erro no pagamento

<img src="./screenshots/modal-falha.png" alt="Modal de erro no pagamento" style="width: 100%; max-width: 400px;">

#

## Cartões para exibir

O cartão válido vai aprovar a transação no backend;

```javascript
let cards = [
  // valid card
  {
    card_number: '1111111111111111',
    cvv: 789,
    expiry_date: '01/18',
  },
  // invalid card
  {
    card_number: '4111111111111234',
    cvv: 123,
    expiry_date: '01/20',
  },
];
```

#

## Transação

### Endpoint: https://run.mocky.io/v3/187310a0-2db9-492f-8511-cc4c17a7be07

### Método: POST

```typescript
// Payload:

interface TransactionPayload {
  // Card Info
  card_number: string;
  cvv: number;
  expiry_date: string;

  // Destination User ID
  destination_user_id: number;

  // Value of the Transaction
  value: number;
}
```

_Obs: Por se tratar de um mock o endpoint sempre retornará o mesmo payload, sucesso no pagamento, independente do cartão_

#

## Usuários

### Endpoint: https://run.mocky.io/v3/537e64d9-434d-411e-9b83-cbee1641d79c

### Método: GET

```typescript
// Payload:

interface User {
  id: number;
  name: string;
  img: string;
  username: string;
}
```

#

## Obrigatório

- Melhoria no estilo da aplicação
- Validação de formulários e máscaras
- Organização do código
- Pleno funcionamento da aplicação

#

