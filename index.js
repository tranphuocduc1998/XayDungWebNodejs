//thiết lập npm modules cho index.js
const express = require('Express');
const pug = require('pug');

//gọi routers
const routerIndex = require('./routers/index.router');

//khai báo biến hỗ trợ express module
const app = express();
const port = 8080;

//thiết lập view engine
app.set('view engine', 'pug');
app.set('views', './views');

//sử dụng routers
app.use('', routerIndex);







//khởi tạo port
app.listen(port, () => console.log('đã khởi tạo và lắng nghe port: ', port));