var sslRedirect = require('heroku-ssl-redirect');

const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(sslRedirect());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(function(req,res,next) {
  if(req.headers["x-forwarded-proto"] == "http") {
      res.redirect("https://mesana.co" + req.url);
  } else {
      return next();
  } 
});


app.listen(port);