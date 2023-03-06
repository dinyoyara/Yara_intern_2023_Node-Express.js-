//Aprove only Admin role
const forAdmin = (req, res, next) => {
    const role = req.userRole;
    if (role != 'admin') return res.status(403).end('unauth role');
    next();
};

//Aprove Admin and Write roles
const forWriters = (req, res, next) => {
    const role = req.userRole;
    if (role == 'read') return res.status(403).end('unauth role');
    next();
};

module.exports = {
    forAdmin,
    forWriters
};
