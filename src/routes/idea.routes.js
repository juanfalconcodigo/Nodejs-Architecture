const { Router } = require('express');
const { ParseIntMiddleware, AuthMiddleware } = require('../middlewares');

module.exports = function({ IdeaController }) {
    const router = Router();
    router.route("/").get(ParseIntMiddleware, IdeaController.getAll);
    router.route("/:ideaId").get(IdeaController.get);
    router.route("/:userId/all").get(IdeaController.getUserIdeas);
    router.route("/").post(IdeaController.create);
    router.route("/:ideaId").patch(AuthMiddleware, IdeaController.update);
    router.route("/:ideaId").delete(AuthMiddleware, IdeaController.delete);
    router.route("/:ideaId/upvote").post(AuthMiddleware, IdeaController.upvoteIdea);
    router.route("/:ideaId/downvote").post(AuthMiddleware, IdeaController.downvoteIdea);

    return router;
}