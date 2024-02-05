const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile('/usr/app/index.html', {root: __dirname })
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
