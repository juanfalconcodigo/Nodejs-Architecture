const { sign } = require('jsonwebtoken');
const { JWT_SECRET, EXPIRES_IN } = require('../config');

module.exports.generateToken = (user) => {
    return sign({ user }, JWT_SECRET, { expiresIn: EXPIRES_IN });
}