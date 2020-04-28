var express = require('express');
var router = express.Router();
var formController = require('../controllers/form.controller');

router
    .post('/', formController.createForm)
    .get('/', formController.getForms)
    .delete('/', formController.deleteForms);

router
    .post('/:formId', formController.submitForm)
    .get('/:formId', formController.getForm);

module.exports = router;
