function getView(req, res) { 
    res.render('home', null);
}

function btnEntrar(req, res) { 
    res.redirect('/tarefas'); 
}

module.exports = { getView, btnEntrar };