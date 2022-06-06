const express = require('express');
const router = express.Router();
const userController = require('../controllers/auth');

router.get('', userController.getAll);
router.post('/login', userController.login);
router.post('/add', userController.add);

module.exports = router;