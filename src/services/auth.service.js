const { JwtHelper } = require('../helpers');
let _userService = null
class AuthService {
    constructor({ UserService }) {
        _userService = UserService;
    }

    async signUp(user) {
        const { username } = user;
        const userExist = await _userService.getUserByUsername(username);
        if (userExist) {
            const error = new Error();
            error.status = 400;
            error.message = "El usuario ingresado ya existe";
            throw error;
        }

        return await _userService.create(user);
    }

    async signIn(user) {
        const { username, password } = user;
        const userExist = await _userService.getUserByUsername(username);
        if (!userExist) {
            const error = new Error();
            error.status = 404;
            error.message = "Usuario* o contraseña errada";
            throw error;
        }

        if (!userExist.comparePasswords(password)) {
            const error = new Error();
            error.status = 400;
            error.message = "Usuario o contraseña* errada";
            throw error;
        }
        const userToEncode = {
            username: userExist.name,
            id: userExist._id
        };

        const token = JwtHelper.generateToken(userToEncode);

        return {
            user: userExist,
            token
        }
    }
}

module.exports = AuthService;