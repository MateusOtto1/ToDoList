const express = require('express');
const session = require("express-session");
const expressLayouts = require('express-ejs-layouts');
const tarefaController = require('./controllers/tarefaController');
const homeController = require('./controllers/homeController');
const usuarioController = require("./controllers/usuarioController");
const app = express();
const port = 3001;
app.use(session({secret:"info63"}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    app.set('layout', './layouts/default/index');
    homeController.getView(req, res);
});

app.get('/login', (res, req) =>{
    app.set('layout', './layouts/default/login');
    usuarioController.getLogin(res,req);
});

app.post('/login', (req, res)=>{
    usuarioController.autenticar(req, res);
});

app.get('/tarefas', (req,res) =>{
    app.set('layout', './layouts/default/index');
    tarefaController.getTarefas(req, res);
});

app.post('/tarefas', tarefaController.addTarefa);
app.delete('/tarefas', tarefaController.deleteTarefa);
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
