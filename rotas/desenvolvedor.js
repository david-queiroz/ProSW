module.exports = app => {
    //acoes rota /desenvolvedor
    
        app.post('/desenvolvedor', (req, res) => {
            console.log('Recebida requisicao de post.')
            
            let desenvolvedor = req.body;
            
            desenvolvedor.status = 'criado';
            desenvolvedor.data = new Date;
    
            let connection = app.bancoDeDados.createDBConnection();
            let modeleDao = new app.bancoDeDados.ModeloDevDao(connection);
    
            modeleDao.salva(desenvolvedor, (erro, resultado) => {
                if (erro){
                    res.status(500).send(erro);
                    
                }
                console.log('execultivo criado');
    
                 res.   status(201).json(desenvolvedor)
            });
            
        });
    
        app.put('/desenvolvedor/:id', (req, res) => {
            console.log('Recebida requisicao de put')
            let desenvolvedor = {};
            let id = req.params.id;
            
            desenvolvedor.status = 'atualizado';
            desenvolvedor.data = new Date;
            desenvolvedor.id = id;
    
            let connection = app.bancoDeDados.createDBConnection();
            let modeleDao = new app.bancoDeDados.ModeloDevDao(connection);
    
            modeleDao.atualiza(desenvolvedor, (erro,resultado) => {
                if (erro){
                    res.status(500).send(erro);
                    
                }
                console.log('execultivo atualizado');
    
                 res.status(201).json(desenvolvedor)
                });
        });
    
        app.get('/desenvolvedor', (req, res) => {
            console.log('Recebida requisicao execultivo.')
    
            
            let connection = app.bancoDeDados.createDBConnection();
            let modeleDao = new app.bancoDeDados.ModeloDevDao(connection);
            
            modeleDao.lista( (erro,resultado) => {
                    if (erro){
                            res.status(500).send(erro);
                    
                        }
                        console.log('execultivo atualizado');
                    
                         res.status(200).json(resultado);
                        });
                });
    
    
                app.get('/desenvolvedor/:id', (req, res) => {
                    console.log('Recebida requisicao execultivo.')
            
                    let desenvolvedor = {};
                    let id = req.params.id;
                    
                    desenvolvedor.id = id;
                    
                    let connection = app.bancoDeDados.createDBConnection();
                    let modeleDao = new app.bancoDeDados.ModeloDevDao(connection);
                    
                    modeleDao.buscaPorId(desenvolvedor.id, (erro,resultado) => {
                            if (erro){
                                    res.status(500).send(erro);
                            
                                }
                                console.log('execultivo atualizado');
                            
                                 res.status(200).json(resultado);
                                });
                        });
    
    //acoes rota /desenvolvedor
    
        app.post('/desenvolvedor', (req, res) => {
            console.log('Recebida requisicao de post.')
            
            let desenvolvedor = req.body;
            
            desenvolvedor.status = 'criado';
            desenvolvedor.data = new Date;
    
            let connection = app.bancoDeDados.createDBConnection();
            let modeleDao = new app.bancoDeDados.ModeloDevDao(connection);
    
            modeleDao.salva(desenvolvedor, (erro, resultado) => {
                if (erro){
                    res.status(500).send(erro);
                    
                }
                console.log('execultivo criado');
    
                 res.   status(201).json(desenvolvedor)
            });
            
           // console.log(connection)
           //res.status(201).send(desenvolvedor);
        });
    
        app.put('/desenvolvedor/:id', (req, res) => {
            console.log('Recebida requisicao de put')
            let desenvolvedor = {};
            let id = req.params.id;
            
            desenvolvedor.status = 'atualizado';
            desenvolvedor.data = new Date;
            desenvolvedor.id = id;
    
            let connection = app.bancoDeDados.createDBConnection();
            let modeleDao = new app.bancoDeDados.ModeloDevDao(connection);
    
            modeleDao.atualiza(desenvolvedor, (erro,resultado) => {
                if (erro){
                    res.status(500).send(erro);
                    
                }
                console.log('execultivo atualizado');
    
                 res.status(201).json(desenvolvedor)
                });
        });
    
        app.get('/desenvolvedor', (req, res) => {
            console.log('Recebida requisicao execultivo.')
    
            //let desenvolvedor = {};
            // let id = req.params.id;
            
            // desenvolvedor.id = id;
            
            let connection = app.bancoDeDados.createDBConnection();
            let modeleDao = new app.bancoDeDados.ModeloDevDao(connection);
            
            modeleDao.lista( (erro,resultado) => {
                    if (erro){
                            res.status(500).send(erro);
                    
                        }
                        console.log('execultivo atualizado');
                    
                         res.status(200).json(resultado);
                        });
                });
    
    
                app.get('/desenvolvedor/:id', (req, res) => {
                    console.log('Recebida requisicao execultivo.')
            
                    let desenvolvedor = {};
                    let id = req.params.id;
                    
                    desenvolvedor.id = id;
                    
                    let connection = app.bancoDeDados.createDBConnection();
                    let modeleDao = new app.bancoDeDados.ModeloDevDao(connection);
                    
                    modeleDao.buscaPorId(desenvolvedor.id, (erro,resultado) => {
                            if (erro){
                                    res.status(500).send(erro);
                            
                                }
                                console.log('execultivo atualizado');
                            
                                 res.status(200).json(resultado);
                                });
                        });
    
        
        };