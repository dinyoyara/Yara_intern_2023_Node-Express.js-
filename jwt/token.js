var jwt = require('jsonwebtoken');

const config = require('./config.json');

const generateToken = (data) => {
    return jwt.sign(data, config.jwtSecret, { expiresIn: 10 * 60 });
};

module.exports = {
    generateToken
};

// decode: http://calebb.net/
