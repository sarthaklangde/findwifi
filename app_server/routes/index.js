var express = require('express');
var router = express.Router();
var controllerLocations = require('../controllers/locations');
var controllerOthers = require('../controllers/others');

/* GET home page. */
router.get('/', controllerLocations.homeList);
router.get('/location',controllerLocations.locationInfo);
router.get('/location/review/new',controllerLocations.addReview);

router.get('/about',controllerOthers.about);

module.exports = router;
