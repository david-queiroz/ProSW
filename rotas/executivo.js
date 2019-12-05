module.exports = function(app){
    app.get('/executivo', function(req, res){
        console.log('Recebida requisicao de teste na porta 8080.')
        res.send('ok.');
});

}