const express = require('express');
const router = express.Router();

const notesCtrl = require('../controllers/notes');

// POST /inventories/:id/notes
//router.post('/inventories/:id/notes', notesCtrl.create);
router.post('/inventories/:id', notesCtrl.create);
// DELETE /inventories/:id
//router.delete('/inventories/:id', notesCtrl.delete);
router.delete('/notes/:id', notesCtrl.delete)

module.exports = router;
