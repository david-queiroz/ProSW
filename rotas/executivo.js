module.exports = app => {
//acoes rota /executivo

    app.post('/executivo', (req, res) => {
        console.log('Recebida requisicao de post.')
        
        let executivo = req.body;
        
        executivo.status = 'criado';
        executivo.data = new Date;

        let connection = app.bancoDeDados.createDBConnection();
        let modeleDao = new app.bancoDeDados.ModeloDao(connection);

        modeleDao.salva(executivo, (erro, resultado) => {
            if (erro){
                res.send(erro);
                
            }
            console.log('execultivo criado');

             res.   status(201).json(executivo)
        });
        
       // console.log(connection)
       //res.status(201).send(executivo);
    });

    app.put('/executivo/:id', (req, res) => {
        console.log('Recebida requisicao de put')
        let executivo = {};
        let id = req.params.id;
        
        executivo.status = 'atualizado';
        executivo.id = id;

        let connection = app.bancoDeDados.createDBConnection();
        let modeleDao = new app.bancoDeDados.ModeloDao(connection);

        modeleDao.atualiza(executivo, (erro,resultado) => {
            if (erro){
                res.send(erro);
                
            }
            console.log('execultivo atualizado');

             res.status(201).json(executivo)
            });
    });

    app.get('/executivo', (req, res) => {
        console.log('Recebida requisicao execultivo.')
        let executivo = {};
        let id = req.params.id;
        
        executivo.id = id;

        let connection = app.bancoDeDados.createDBConnection();
        let modeleDao = new app.bancoDeDados.ModeloDao(connection);

        modeleDao.lista(executivo, (erro,resultado) => {
            if (erro){
                res.send(erro);
                
            }
            console.log('execultivo atualizado');

             res.status(200).json(executivo)
            });
    });

    app.delete('/executivo/:id', (req, res) => {
        console.log('Recebida requisicao execultivo.')
        let executivo = {};
        let id = req.params.id;
        
        executivo.status = 'apagado';
        executivo.data = new Date;
        executivo.id = id;

        let connection = app.bancoDeDados.createDBConnection();
        let modeleDao = new app.bancoDeDados.ModeloDao(connection);

        modeleDao.apaga(executivo, (erro,resultado) => {
            if (erro){
                res.send(erro);
                
            }
            console.log('execultivo atualizado');

             res.status(200).json(executivo)
            });
    });
    
};