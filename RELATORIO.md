# RELATORIO

## Projeto Organização

O projeto foi estruturado em várias pastas e arquivos, facilitando a navegabilidade e manutenção. A organização segue as boas práticas de desenvolvimento de software, dividindo funcionalidades em módulos e componentes.

### Estrutura do Projeto:
- **src/** - Contém o código fonte da aplicação.
- **public/** - Arquivos estáticos como HTML, CSS e imagens.
- **tests/** - Testes unitários e de integração.
- **docs/** - Documentação do projeto.

## Tecnologias Utilizadas 

- **Frontend:**
  - React.js - para a construção da interface do usuário.
  - Bootstrap - para estilização e responsividade.

- **Backend:**
  - Node.js - para a construção da API.
  - Express - framework para simplificar a construção do servidor.

- **Banco de Dados:**
  - MongoDB - banco de dados NoSQL para armazenamento de dados.

## Validações Implementadas 

O sistema possui uma série de validações para garantir a integridade dos dados:
- Validação de campos obrigatórios no formulário.
- Formato de e-mail verificado.
- Validações customizadas para campos específicos (como CPF ou CNPJ).

## Fluxo de Desenvolvimento 

O desenvolvimento segue uma abordagem ágil, com iterações curtas. O fluxo típico envolve:
1. Planejamento da iteração.
2. Desenvolvimento das funcionalidades.
3. Revisões de código.
4. Testes unitários e de integração.
5. Implementação e monitoramento no ambiente de produção.

## Instruções de Setup 

Para configurar o projeto em sua máquina local, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/GustavoTI-DEv/crud-clientes.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd crud-clientes
   ```

3. Instale as dependências do backend:
   ```bash
   npm install
   ```

4. Instale as dependências do frontend:
   ```bash
   cd client
   npm install
   ```

5. Inicie o servidor:
   ```bash
   npm start
   ```

6. Acesse a aplicação em `http://localhost:3000`.

---

Esse relatório fornece uma visão geral do projeto e pode ser utilizado como referência para novos desenvolvedores que entrarem na equipe. 
