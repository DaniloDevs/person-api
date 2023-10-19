# Person API

Esta é uma API simples criada usando Node.js e Fastify para lidar com operações CRUD (Create, Read, Update, Delete) para informações de pessoas. A API fornece informações sobre pessoas, incluindo nome, idade, gênero e emprego. Ela pode ser acessada em [https://person-api-whge.onrender.com/persons](https://person-api-whge.onrender.com/persons).

## Rotas

### GET /persons

Retorna uma lista de todas as pessoas.

### POST /persons

Cria uma nova pessoa. Deve incluir os campos: nome, idade, gênero e emprego no corpo da solicitação.

### PUT /persons/:id

Atualiza as informações de uma pessoa existente com base no ID fornecido. Deve incluir os campos a serem atualizados no corpo da solicitação.

### DELETE /person/:id

Exclui uma pessoa com base no ID fornecido.

## Uso

Aqui está um exemplo de como usar a API com `javascript`:

-  Buscar todas as pessoas

  ```javascript
   function fetchPersons() {
    fetch('https://person-api-whge.onrender.com/persons')
      .then(response => response.json())
      .then(data => {
        console.log('Pessoas:', data);
      })
      .catch(error => {
        console.error('Erro ao buscar pessoas:', error);
      });
  }
