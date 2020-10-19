
const express = require('express');
const app = express();

app.use(express.static('./dist/homeworkAngular'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/homeworkAngular.json>/'}
  );
  });

  app.listen(process.env.PORT || 8080);