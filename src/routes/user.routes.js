const { Router } = require('express');
const { AuthMiddleware } = require('../middlewares');

module.exports = function({ UserController }) {
    const router = Router();
    router.route("/").get(AuthMiddleware, UserController.getAll);
    router.route("/:userId").get(UserController.get);
    router.route("/:userId").patch(UserController.update);
    router.route("/:userId").delete(UserController.delete);
    return router;
}