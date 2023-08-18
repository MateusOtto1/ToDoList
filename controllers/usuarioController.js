 const usuario = require("../models/UsuarioModel");

function getLogin (req, res){
    res.render('login');
}

async function autenticar(req, res){
    const resp = await usuario.autenticar(req.body.email, req.body.senha);
    console.log(resp);
    if(resp.length > 0){
        req.session.user = {
        id_usuario:resp[0].id_usuario,
        email:resp[0].email,
        nome:resp[0].nome
    }
    res.redirect('/');
    }else{
        res.redirect('/login');
    }
}

module.exports = {getLogin, autenticar};