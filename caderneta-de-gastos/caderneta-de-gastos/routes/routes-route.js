const express = require('express');
// const { register, login, getTeste } = require('../controllers/auth.controller');
// const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/forms', forms);
router.get('/home', home);

module.exports = router;