class UsuarioModel {
    constructor(id, nome, email, senha){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    static async autenticar(email, senha){
        const md5 = require("md5");
        const db = require("./Database");
        const sql = `SELECT * FROM usuario WHERE email='${email}' AND senha='${md5(senha)}'`;
        console.log(sql);

        return await db.query(sql);
    }
}

module.exports = UsuarioModel;