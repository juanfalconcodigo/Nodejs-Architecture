const { Router } = require('express');
const { AuthMiddleware, ParseIntMiddleware, CacheMiddleware } = require('../middlewares');
const { CacheTimeHelper } = require('../helpers');

module.exports = function({ UserController }) {
    const router = Router();
    /* [ParseIntMiddleware, CacheMiddleware(CacheTimeHelper.ONE_HOUR)] */
    router.route("/").get(ParseIntMiddleware, UserController.getAll);
    router.route("/:userId").get(UserController.get);
    router.route("/:userId").patch(AuthMiddleware, UserController.update);
    router.route("/:userId").delete(AuthMiddleware, UserController.delete);
    return router;
}