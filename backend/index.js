const express = require('express');
const app = express();
const port = 5000;
const {connectServer} = require('./db.js');
var cors = require('cors');

app.use(cors());
app.use(express.json());

connectServer(err => {
  const auth = require('./authenticator.js');
  app.use('/admin.localwobiz.com', auth);
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
