const path = require('path');

const viewsFolder = path.join(__dirname,'../views/'); // Aquí están las vistas (HTML).  

function getSlash(req, res) { // /
    console.log("GET - /");
    //const req2 = fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    //req2.then(res => res.json()).then(data => console.log(data.name));
}

function getLogin(req, res) { // /login
    console.log("GET -  Login");
    res.sendFile(path.join(viewsFolder,'login.html'));
}

function getInicio(req, res) { // /inicio
    console.log("GET -  Inicio");
    res.sendFile(path.join(viewsFolder,'inicio.html'));
}

module.exports = { getLogin, getSlash, getInicio }; // Exporta las funciones del controller