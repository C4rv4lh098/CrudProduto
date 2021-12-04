Tecnologias:
-- Angular 12
-- Bootstrap
-- Java 11

PARA RODAR O PROJETO:
- Acessar a pasta 'CrudProduto' pelo terminal, usar o comando mvn clean install e depois mvn spring-boot:run
desta forma o back-end já estará funcionando, usando a porta 8080;

- Depois acessar a pasta 'frontCrud' pelo terminal, usar o comando npm install e depois npm start estando no ar o front-end da aplicação, utilizando a porta 4200;

BANCO DE DADOS:
- Após rodar a parte back-end, acessar a url: http://localhost:8080/h2-console/ e por os seguintes dados:

    Saved Settings: Generic H2 (Embedded)
    Setting Name: Generic H2 (Embedded)
    Driver Class: org.h2.Driver
    JDBC URL: jdbc:h2:mem:testdb
    User Name: sa
    Password:

- Conseguindo assim visualizar as informações salvas no banco