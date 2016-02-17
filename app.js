var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(cors());
app.use(bodyParser.json());

app.use('/employees', require('./employee/routes'));

app.disable('x-powered-by');

app.listen(app.get('port'), function(){
  console.log('RH API online');
});
