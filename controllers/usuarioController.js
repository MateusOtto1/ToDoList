 const usuario = require("../models/UsuarioModel");

function getLogin (req, res){
    res.render('login');
}

function autenticar(req, res){
    usuario.autenticar(req.body.email, req.body.senha);
}

module.exports = {getLogin, autenticar};