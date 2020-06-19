const { Router } = require('express');

module.exports = function({ AuthController }) {
    const router = Router();
    router.route("/signup").post(AuthController.signUp);
    router.route("/signin").post(AuthController.signIn);

    return router;
}