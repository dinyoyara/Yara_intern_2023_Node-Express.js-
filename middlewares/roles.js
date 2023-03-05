const forAdmin = (req, res, next) => {
    const role = req.userRole;
    if (role != 'admin') return res.status(403).end('unauth role');
    next();
};

const forWriters = (req, res, next) => {
    const role = req.userRole;
    if (role != 'write') return res.status(403).end('unauth role');
    next();
};

module.exports = {
    forAdmin,
    forWriters
};
