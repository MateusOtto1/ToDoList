const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const tarefaController = require('./controllers/tarefaController');
const homeController = require('./controllers/homeController');
const app = express();
const port = 5000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(expressLayouts);
app.set('layout', './layouts/default/index');
app.use(express.urlencoded({ extended: true }));
app.get('/home', homeController.getView);
app.get('/tarefas', tarefaController.getTarefas);
app.post('/tarefas', tarefaController.addTarefa);
app.delete('/tarefas', tarefaController.deleteTarefa);
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
