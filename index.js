let app = require('./config/custom-express')();
let consign = require('consign')
app.listen(8080, function(){
    console.log('Servidor rodando na porta 8080.');
    
});
