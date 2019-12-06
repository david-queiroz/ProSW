module.exports = app => {
//acoes rota /executivo

    app.post('/executivo/cadastrar', (req, res) => {
        console.log('Recebida requisicao de post.')
        
        let executivo = req.body;
        
        executivo.status = 'criado';
        executivo.data = new Date;

        let connection = app.bancoDeDados.createDBConnection();
        let modeleDao = new app.bancoDeDados.modeloDao(connection);

        modeleDao.salva(executivo, (erro, resultado) => {
            console.log('execultivo criado');

            // res.json(executivo)
        });


        console.log(connection)
        res.status(201).send(executivo);
    });

    app.put('/executivo', (req, res) => {
        console.log('Recebida requisicao de teste na porta 8080.')
        res.status(203).send('ok.');
    });

    app.get('/executivo', (req, res) => {
        console.log('Recebida requisicao execultivo.')
        res.send('OK');
    });

    app.delete('/executivo', (req, res) => {
        console.log('Recebida requisicao execultivo.')
        res.send('ok.');
    });
//acoes rota /desenvolvimento

    app.post('/desenvolvimento', (req, res) => {
        console.log('Recebida requisicao de teste na porta 8080.')
        res.status(201).send('ok.');
    });
    
    app.put('/desenvolvimento', (req, res) => {
        console.log('Recebida requisicao de teste na porta 8080.')
        res.status(203).send('ok.');
    });
    
    app.get('/desenvolvimento', (req, res) => {
        console.log('Recebida requisicao execultivo.')
        res.send('OK');
    });
    
    app.delete('/desenvolvimento', (req, res) => {
        console.log('Recebida requisicao execultivo.')
        res.send('ok.');
    });
    
    };