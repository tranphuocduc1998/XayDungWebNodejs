//thiết lập express module
const express = require('Express');

//gọi controller của router
const controller = require('../controllers/index.controller');

//khai báo router
const router = express.Router();

//get router
router.get('/', controller.getIndex);



module.exports = router;