const forAdmin = (req, res, next) => {
    const role = req.userRole;
    if (role != 'admin') return res.sendStatus(403);
    next();
};

const forWriters = (req, res, next) => {
    const role = req.userRole;
    if (role != 'write') return res.sendStatus(403);
    next();
};

module.exports = {
    forAdmin,
    forWriters
};
