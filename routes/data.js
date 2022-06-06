const express = require('express');
const dataController = require('../controllers/data');
const authController = require('../controllers/auth')

const router = express.Router();

router.use(authController.authorize);

router.get('', dataController.getAll);
router.get('/:id', dataController.getData);
router.post('', authController.adminAuthorize, dataController.create);
router.put('', authController.adminAuthorize, dataController.update);
router.delete('', authController.adminAuthorize, dataController.delete);

module.exports = router;