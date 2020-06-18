const { Router } = require('express');

module.exports = function({ CommentController }) {
    const router = Router();
    router.route("/:commentId/unique").get(CommentController.get);
    router.route("/:ideaId").get(CommentController.getIdeaComments);
    router.route("/:ideaId").post(CommentController.createdComment);
    router.route("/:commentId").patch(CommentController.update);
    router.route("/:commentId").delete(CommentController.delete);

    return router;
}