const express = require('express');
const dataController = require('../controllers/data');

const router = express.Router();

router.get('', dataController.getAll);
router.get('/:id', dataController.getData);
router.post('', dataController.create);
router.put('', dataController.update);
router.delete('', dataController.delete);

module.exports = router;