var userService = require('../services/user.service');

async function createUser(req, res) {
    try {
        await userService.createUser(req.body);
        res.send(true);
    } catch (error) {
        res.status(409).send(error.toString())
    }
}

async function loginUser(req, res) {
    try {
        let user = await userService.loginUser(req.body);
        if (!user)
            throw 'User is not exists.';
        let token = await userService.createToken({ userName: req.body.userName });
        res.cookie('token', token, { maxAge: 900000, httpOnly: true, secure: false });
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.send(true);
    } catch (error) {
        res.status(409).send(error.toString())
    }
}

async function isLoggedIn(req, res) {
    try {
        if (req.cookies.token == null)
            res.status(409).send('No cookie');
        let result = userService.revertToken(req.cookies.token);
        res.send(result);
    } catch (err) {
        res.status(409).send('No cookie');
    }
}

module.exports = {
    createUser,

    loginUser,

    isLoggedIn,
};
