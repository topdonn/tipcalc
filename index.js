const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function(){
  console.log('server is listening');
});

app.get('/tipcalc', function(req,res) {
  let tipTotal = '';
  res.render('tipcalc',{tipTotal});
});

app.post('/tipcalc', function(req,res) {
  let amount = (req.body.amount*1);
  let tip = 0;

  switch (req.body.tip){
    case '20%':
      tip += .05;
    case '15%':
      tip += .05;
    case '10%':
      tip += .05;
    case '5%':
      tip += .05;
  }
  res.render('tipcalc', {amount,tip: req.body.tip,tipTotal: (tip*amount)});
});
