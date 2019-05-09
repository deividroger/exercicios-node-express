const express = require('express')

const server = express()

server.route('/clientes')
        .get((req,resp) => resp.send('Lista de clientes'))
        .post((req,resp) => resp.send('Novo cliente'))
        .put((req,resp) => resp.send('Altera cliente'))
        .delete((req,resp) => resp.send('remove cliente'))



server.listen(3000,()=> console.log('Executando'))