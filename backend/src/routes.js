const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;


  //const params = request.query;
  //const params = request.params // /users/:id
  //const body = request.body;
  //console.log(data);
  //console.log(params);
  //nothing;
  //console.log(body);
  
  //return response.json( {id} );
    //{
    //evento: 'Semana OmniStack 11.0',
    //aluno: 'Hellen Rosa'  
    //});