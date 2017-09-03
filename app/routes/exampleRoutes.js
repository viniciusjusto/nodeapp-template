const router = require('express').Router();
const controller = require('../controllers/exampleController');

router.get('/examples', controller.getExamples);
router.post('/examples/save', controller.saveExample);

module.exports = router;