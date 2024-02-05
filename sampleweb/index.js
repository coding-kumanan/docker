const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/usr/app/sampleweb/index.html')
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
