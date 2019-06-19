const express = require('express');
var bodyParser = require('body-parser')
const app = express();
// const path = require('path')

// process.env.NODE_ENV = 'test'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('*', function (request, response){
//     response.sendFile(path.resolve(__dirname, 'src', 'index.js'))
//   })

app.get('/src/index.js', (req,res) => {
    console.log('howto howto')
} ) 
app.use('/', require('./api/users/index'));
// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!');

//   const models = require('./models');
//   //개발모드에서는 false로 하거나 사용하지 않음.
//   models.sequelize.sync({force: true})
//     .then(() => {
//       console.log('✓ DB connection success.');
//       console.log('  Press CTRL-C to stop\n');
//     })
//     .catch(err => {
//       console.error(err);
//       console.log('✗ DB connection error. Please make sure DB is running.');
//       process.exit();
//     });
// });


module.exports = app;
