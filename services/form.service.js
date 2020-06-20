const Form = require('../models/form.model');

async function createForm(form, user) {
    const newForm = new Form({ ...form, createBy: user.userName });
    await newForm.save();
}

async function getForms(user) {
    return await Form.find({createBy: user.userName});
}

async function submitForm(formId, formSubmission) {
    await Form.update({ _id: formId }, { $push: { formSubmissions: formSubmission } });
}

async function getForm(formId) {
    return await Form.findOne({ _id: formId });
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
