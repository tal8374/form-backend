const User = require('../models/user.model');

const jwt = require('jsonwebtoken')

async function createUser(user) {
    const newUser = new User(user);
    await newUser.save();
}

async function loginUser(user) {
    return await User.findOne(user);
}

async function createToken(payload) {
    console.log(payload)
    const token = jwt.sign(payload, 'someSecret')
    return token;
}

function revertToken(token) {
    return jwt.decode(token, 'someSecret');
}

module.exports = {
    createUser,

    createToken,

    loginUser,

    revertToken,
};
