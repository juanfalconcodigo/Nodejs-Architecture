const { Router } = require('express');
const { ParseIntMiddleware } = require('../middlewares');

module.exports = function({ IdeaController }) {
    const router = Router();
    router.route("/").get(ParseIntMiddleware, IdeaController.getAll);
    router.route("/:ideaId").get(IdeaController.get);
    router.route("/:ideaId/all").get(IdeaController.getUserIdeas);
    router.route("/").post(IdeaController.create);
    router.route("/:ideaId").patch(IdeaController.update);
    router.route("/:ideaId").delete(IdeaController.delete);
    router.route("/:ideaId/upvote").post(IdeaController.upvoteIdea);
    router.route("/:ideaId/downvote").post(IdeaController.downvoteIdea);

    return router;
}