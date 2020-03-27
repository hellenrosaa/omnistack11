const express = require('express');
const cors = require('cors');
const routes = require('./routes'); 

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/* 
 * Rota / Recurso
 */

 /**
  * Metodos HTTP:
  * GET: buscar/listar uma info do back-end;
  * POST: criar uma info no back-end;
  * PUT: alterar uma info no back-end;
  * DELETE: deletar uma info no back-end;
  */

  /**
   * Tipo de parametros:
   * Query Params: parametros enviados na rota apos '?' (filtros,  paginação);
   * /users?name=Hellen || /users?page=2&nome=Hellen&
   * 
   * Route Params: parametros utiliz. para ident. recursos;
   * /user/:id
   * 
   * Request Body: corpo da requisição, utiliz. para criar ou alterar recursos;
   * 
   */

   /**
    * Banco de dados:
    * 
    * SQL: MySQL, SQLite, PostgreSQL, Oracke, Microsoft SQL Server;
    * NoSQL: MongoDB, CouchDB, etc;
    */

    /**
     * Driver:
     *  SELECT * FROM  users
     * 
     * Query Builder:
     *  table('users').select('*').where()
     */