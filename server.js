var express = require('express');
var http = require ('http');  // подгрузить соответс.модуль

var app = express();

var httpServer = http.createServer(app);

require('./routes/index')(app);

app.get('/',function(reg, res, next){
    res.status(200).json({succes:"-------etajhaetj----"});
});

app.post('/',function(reg, res, next){
    res.status(200).json({succes:"-------POST----"});
});

app.use('/test',function(reg, res, next){
    res.status(200).send({succes:"-------TEST----"});
});


app.listen(3000,function(){//прослуховувати на певному порті
        console.log("--------firstsdh--------")
    }
);

