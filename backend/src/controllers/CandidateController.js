const Candidate = require('../../models/Candidate');

module.exports = {
    async register(req, res) {

        const { nome, cargo, nascimento, civil, sexo, endereco, numero, bairro, cidade, estado, cep, telefone1, 
            telefone2, celular, contato, email, profissao, rg, cpf, veiculo, habilitacao} = req.body;

            const newCandidate = new Candidate();

            newCandidate.nome = nome;
            newCandidate.cargo = cargo;
            newCandidate.nascimento = nascimento;
            newCandidate.civil = civil;
            newCandidate.sexo = sexo;
            newCandidate.endereco = endereco;
            newCandidate.numero = numero;
            newCandidate.bairro = bairro;
            newCandidate.cidade = cidade;
            newCandidate.estado = estado;
            newCandidate.cep = cep;
            newCandidate.telefone1 = telefone1;
            newCandidate.telefone2 = telefone2;
            newCandidate.celular = celular;
            newCandidate.contato = contato;
            newCandidate.email = email;
            newCandidate.profissao = profissao;
            newCandidate.rg = rg;
            newCandidate.cpf = cpf;
            newCandidate.veiculo = veiculo;
            newCandidate.habilitacao = habilitacao;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
            
                return res.status(500).send('');
            }
            return res.status(200).send('');
        });
    },

};