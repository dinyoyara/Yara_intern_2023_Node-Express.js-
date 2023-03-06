//Aprove only Admin role
const forAdmin = (req, res, next) => {
    const role = req.userRole;
    if (role == 'admin') next();
    return res.status(403).end('unauth role');
};

//Aprove Admin and Write roles
const forWriters = (req, res, next) => {
    const role = req.userRole;
    if (role == 'write' || role == 'admin') next();
    return res.status(403).end('unauth role');
};

module.exports = {
    forAdmin,
    forWriters
};
