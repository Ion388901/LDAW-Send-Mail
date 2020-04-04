const router = require('express').Router();

const authController = require('../controllers/AuthController');
const authMiddleware = require('../middlewares/AuthMiddleware');
const authValidator = require('../validators/AuthValidators');
const mailController = require('../controllers/MailController');
const homepageController = require('../controllers/HomepageController');
const passport = require('passport');

router.get('/', homepageController.index);

reouter.get('/send-mail', mailController.sendMail);

router.get('/auth/login', authController.login);
router.get('/auth/register', authController.register);
router.post('/auth/register', authValidator.store, authController.store);
router.post('/auth/login', passport.authenticate('local', { failureRedirect: '/auth/login?authError=1', successRedirect: '/' }));
router.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/protected', authMiddleware.isAuth, (req, res) => {
  res.send('Protected route, user correctly authenticated');
})

module.exports = router;
