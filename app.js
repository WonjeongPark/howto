const express = require('express');
var bodyParser = require('body-parser')
// const router = express.Router();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', require('./api/users'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});


// module.exports = router;
module.exports = app;
