const express = require('express');
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', require('./api/users/index'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
//force 값이 false 일 경우에는 데이터베이스에 테이블이 있을 경우 다시 만들지 않는 기능
//실제 운영중인 서버라면은 반드시 {force: false} 옵션으로 실행
  require('./model').sequelize.sync({force:true})
    .then(()=>{
      console.log('Database sync')
    })
});


module.exports = app;
