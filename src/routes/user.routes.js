const { Router } = require('express');
module.exports = function({ UserController }) {
    const router = Router();
    router.route("/").get(UserController.getAll);
    router.route("/:userId").get(UserController.get);
    router.route("/:userId").patch(UserController.update);
    router.route("/:userId").delete(UserController.delete);
    return router;
}