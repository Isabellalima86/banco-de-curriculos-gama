const Candidate = require('../../models/Candidate');

module.exports = {
    async register(req, res) {

        const pega = req.body;
        const pega_cpf = pega.cpf;
        
        
        const verifica = await Candidate.find({cpf: pega_cpf });
        
        if (verifica.length === 0){
       return res.status(201).send('Não tem CPF');}
       else{
        return res.status(200).send('tem cpf');
       }
    },



};