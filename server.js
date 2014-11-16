
var app = require('./app/index.js');
    config = require('./config/config.js');

app.listen(config.port, function(){
    console.log('app 啟動成功, http://127.0.0.1:%s', config.port);
});

