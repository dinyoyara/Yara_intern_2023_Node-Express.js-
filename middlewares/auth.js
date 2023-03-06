const jwt = require('jsonwebtoken');

const config = require('../jwt/config.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, config.jwtSecret, (err, tokenData) => {
            if (err) return res.status(403).end('invalid / missed token');
            if (tokenData.exp * 1000 <= Date.now()) return res.status(403).end('expired token');
            req.userRole = tokenData.role;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
