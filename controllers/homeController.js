function getView(req, res) { 
    res.render('home', null);
}

function btnEntrar(req, res) { 
    res.redirect('/login'); 
}

module.exports = { getView, btnEntrar };