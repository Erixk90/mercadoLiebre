const express = require("express");
const path = require('path');
//const { listenerCount } = require("process");
const app = express();

app.listen(3000, () => {
    console.log("Funcionando y Activo")
});

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

//const publicPath = path.join(__dirname,'/mercadoLiebre/public');
//app.use(express.static(publicPath));

/app.use(express.static('public'));