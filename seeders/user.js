const User = require('../models/user');

const { generateCryptedPassword } = require('../helpers/bcrypt');

module.exports = async (count) => {
    if ((await User.findAndCountAll()).count > 0) return;
    for (let i = 0; i < count; i++) {
        let user = User.build({
            name: 'user_00' + (i + 1),
            email: 'u1' + i + 'ser@abc.us'
        });
        if (i == 0) {
            user.role = 'admin';
        }
        if (i % 2 != 0) {
            user.role = 'write';
        }
        user.password = await generateCryptedPassword(`p${i + 1}${i + 1}${i + 1}${i + 1}`);
        await user.save();
    }
};
