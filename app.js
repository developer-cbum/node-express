const express = require('express');
const ejs = require('ejs');
const app = express();
const routes = require('./routers');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use('/images', express.static(__dirname + '/public/images'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use(express.static(__dirname + '/views'));

/* // 라우팅
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/write', (req, res) => {
  res.render('./posts/write');
}); */

app.use('/', routes);

// 404 에러 처리
app.use((req, res, next) => {
  res.status(404).send('404 - 찾을 수 없음');
});

// 다른 에러 처리
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 - 서버 오류');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});