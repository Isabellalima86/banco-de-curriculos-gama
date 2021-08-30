const express = require('express');
const CandidateController = require('./controllers/CandidateController');
const routes = new express.Router();
const candidate = require('./models/Candidate');
const cpf = require('./controllers/cpf');

routes.post('/register', CandidateController.register);

routes.post('/teste',  cpf.register);

module.exports = routes;