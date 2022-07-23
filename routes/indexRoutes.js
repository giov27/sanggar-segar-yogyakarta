const router = require('express').Router();

const { 
    getHomepageView,
    getInstructorView,
    getMembershipView,
    getAboutView
} = require('../controllers/indexController');

router.get('/', getHomepageView)
router.get('/instruktur', getInstructorView)
router.get('/membership', getMembershipView)
router.get('/tentang', getAboutView)

module.exports = router;