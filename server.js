var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

http.createServer(app).listen(3000, function() {
    console.log('Servidor escutando em https://localhost:3000: ' + this.address().port);
});

