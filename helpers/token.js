var jwt = require('jsonwebtoken');

const config = require('./config/config.json');

const generateToken = (data) => {
    return jwt.sign(data, config.jwtSecret, { expiresIn: '1h' });
};

module.exports = {
    generateToken
};
