let _authService = null;

class AuthController {
    constructor({ AuthService }) {
        _authService = AuthService;
    }

    async signUp(req, res) {
        const { body } = req;
        const createdUser = await _authService.signUp(body);
        return res.status(201).send(createdUser);
    }

    async signIn(req, res) {
        const { body } = req;
        const resp = await _authService.signIn(body);
        return res.send(resp);
    }

}

module.exports = AuthController;