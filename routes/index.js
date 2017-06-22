const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController.js'); 
const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/',catchErrors(storeController.homePage));
router.get('/stores',catchErrors(storeController.getStores));
router.get('/stores/:id/edit',catchErrors(storeController.editStores));

router.get ('/add',catchErrors(storeController.addStore));
router.post('/add',catchErrors(storeController.createStore));
router.post('/add/:id',catchErrors(storeController.updateStores));

module.exports = router;
