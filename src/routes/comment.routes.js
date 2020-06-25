const { Router } = require('express');
const { AuthMiddleware } = require('../middlewares');

module.exports = function({ CommentController }) {
    const router = Router();
    router.route("/:commentId/unique").get(CommentController.get);
    router.route("/:ideaId").get(CommentController.getIdeaComments);
    router.route("/:ideaId").post(AuthMiddleware, CommentController.createdComment);
    router.route("/:commentId").patch(AuthMiddleware, CommentController.update);
    router.route("/:commentId").delete(AuthMiddleware, CommentController.delete);

    return router;
}