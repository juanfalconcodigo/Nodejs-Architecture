const { verify } = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

module.exports = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
        const error = new Error();
        error.status = 400;
        error.message = 'No ingreso el token';
        throw error;
    }

    verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            const error = new Error();
            error.status = 401;
            error.message = "El token ingresado es inválido";
            throw error;
        }
        req.user = decoded.user;
        next();
    });

}