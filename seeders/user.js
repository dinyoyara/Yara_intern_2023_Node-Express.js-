const User = require('../models/user');

module.exports = async (count) => {
    if ((await User.findAndCountAll()).count > 0) return;
    for (let i = 0; i < count; i++) {
        let user = await User.build({
            name: 'user_00' + (i + 1),
            email: 'u1' + i + 'ser@abc.us'
        });
        user.password = await user.generateHash(`p${i + 1}${i + 1}${i + 1}${i + 1}`);
        if (i == 0) {
            user.role = 'admin';
        }
        if (i % 2 != 0) {
            user.role = 'write';
        }
        await user.save();
    }
};
