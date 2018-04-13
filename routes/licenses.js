const express = require('express');
const router = express.Router();
const model = require('../models/Licenses');


router.route('/')
  .get(model.getAllData)
  .post(model.addNewLicense);

router.route('/:id')
  .put(model.updateLicense)
  .delete(model.deleteLicense);


module.exports = router;