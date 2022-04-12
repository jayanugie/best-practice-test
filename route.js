// import express router
const router = require('express').Router();
// atau --> const router = express.Router();

// import controller
const rootController = require('./controllers/root');


// api hello world
router.get('/', rootController.hello);


module.exports = router;