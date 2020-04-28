var formService = require('../services/form.service');

async function createForm(req, res) {
    try {
        console.log(req.body)
        await formService.createForm(req.body);
        res.send(true);
    } catch (error) {
        res.send(error.toString())
    }
}

async function getForms(req, res) {
    try {
        let forms = await formService.getForms();
        res.send(forms);
    } catch (error) {
        res.send(error.toString())
    }
}

async function submitForm(req, res) {
    try {
        await formService.submitForm(req.params.formId, req.body.formSubmission);
        res.send(true);
    } catch (error) {
        res.send(error.toString())
    }
}

async function getForm(req, res) {
    try {
        let form = await formService.getForm(req.params.formId);
        res.send(form.length == 0 ? null : form[0]);
    } catch (error) {
        res.send(error.toString())
    }
}

async function deleteForms(req, res) {
    try {
        await formService.deleteForms(req.params.formId);
        res.send(true)
    } catch (error) {
        res.send(error.toString())
    }
}

module.exports = {
    createForm,

    getForms,

    submitForm,

    getForm,

    deleteForms
};
