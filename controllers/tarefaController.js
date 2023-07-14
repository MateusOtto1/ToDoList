const Tarefa = require('../models/tarefaModel'); 
const tarefas = [];

function getTarefas(req, res) { 
    res.render('tarefas', { tarefas }); 
} 

function addTarefa(req, res) { 
    const { title } = req.body; 
    const tarefa = new Tarefa(Date.now(), title, false); 
    tarefas.push(tarefa); 
    res.redirect('/tarefas'); 
}

function deleteTarefa(req, res) { 
    const { title } = req.body; 
    tarefas.delete({title});
    res.redirect('/tarefas');
}

module.exports = { getTarefas, addTarefa, deleteTarefa };
