const Form = require('../models/form.model');

async function createForm(form) {
    const newPage = new Form(form);
    await newPage.save()
}

async function getForms() {
    return await Form.find({});
}

async function submitForm(formId, formSubmission) {
    await Form.update({_id: formId}, {$push: {formSubmissions: formSubmission}});
}

async function getForm(formId) {
    return await Form.find({_id: formId});
}

async function deleteForms() {
    await Form.remove({});
}

module.exports = {
    createForm,

    getForms,

    submitForm,

    getForm,

    deleteForms
};
