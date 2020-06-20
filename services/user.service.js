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
    const token = jwt.sign(payload, 'someSecret')
    return token;
}

function revertToken(token) {
    try {
        return jwt.decode(token, 'someSecret');
    } catch (error) {
        return null;
    }
}

module.exports = {
    createUser,

    createToken,

    loginUser,

    revertToken,
};
