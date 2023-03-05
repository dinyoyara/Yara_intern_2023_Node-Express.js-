const bcrypt = require('bcrypt');

const generateCryptedPassword = async (value) => {
    return await bcrypt.hash(value, bcrypt.genSaltSync(8));
};
const isValidPassword = async (value, password) => {
    return await bcrypt.compare(value, password);
};

module.exports = {
    generateCryptedPassword,
    isValidPassword
};
