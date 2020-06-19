const { Router } = require('express');
const { AuthMiddleware, ParseIntMiddleware, CacheMiddleware } = require('../middlewares');
const { CacheTimeHelper } = require('../helpers');

module.exports = function({ UserController }) {
    const router = Router();
    router.route("/").get([AuthMiddleware, ParseIntMiddleware, CacheMiddleware(CacheTimeHelper.ONE_HOUR)], UserController.getAll);
    router.route("/:userId").get(UserController.get);
    router.route("/:userId").patch(UserController.update);
    router.route("/:userId").delete(UserController.delete);
    return router;
}