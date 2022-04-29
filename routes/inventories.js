const express = require('express');
const router = express.Router();
const inventoriesCtrl = require('../controllers/inventories');
const isLoggedIn = require('../config/auth');

// All routes starts with: /inventories (because of the mounting in server.js)

router.get('/', inventoriesCtrl.index);
//router.get('/new', inventoriesCtrl.new);
router.get('/:id', inventoriesCtrl.show);
router.post('/', isLoggedIn, inventoriesCtrl.create);
router.delete('/:id', isLoggedIn, inventoriesCtrl.delete);
router.put('/:id', isLoggedIn, inventoriesCtrl.update)

module.exports = router;
