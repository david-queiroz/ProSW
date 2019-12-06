module.exports = app => {
//acoes rota /executivo

    app.post('/executivo/cadastrar', (req, res) => {
        console.log('Recebida requisicao de post.')
        
        let executivo = req.body;
        console.log(executivo)

        res.status(201).send('ok.');
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