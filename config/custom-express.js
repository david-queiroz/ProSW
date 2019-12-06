let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');

module.exports = function(){
    let app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());


    consign()
        .include('rotas')
        .then('bancoDeDados')
        .into(app);
    
    return app;

}