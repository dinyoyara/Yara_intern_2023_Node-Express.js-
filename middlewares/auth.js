// https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/
var jwt = require('jsonwebtoken');

const config = require('../jwt/config.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        //console.log(token + '-' + config.jwtSecret);
        jwt.verify(token, config.jwtSecret, (err, tokenData) => {
            if (err && tokenData.exp < Date.now()) return res.sendStatus(403);
            req.userRole = tokenData.role;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
