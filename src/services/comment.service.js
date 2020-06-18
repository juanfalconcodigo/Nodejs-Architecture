const BaseService = require("./base.service");
let _commentRepository = null,
    _ideaRepository = null;

class CommentService extends BaseService {
    constructor({ CommentRepository, IdeaRepository }) {
        super(CommentRepository);
        _commentRepository = CommentRepository;
        _ideaRepository = IdeaRepository;
    }

    async getIdeaComments(ideaId) {
        if (!ideaId) {
            const error = new Error();
            error.status = 400;
            error.message = "No ingreso el id";
            throw error;
        }
        const idea = await _ideaRepository.get(ideaId);
        if (!idea) {
            const error = new Error();
            error.status = 404;
            error.message = "No existe esa idea";
            throw error;
        }

        const { comments } = idea;
        return comments;
    }

    async createdComment(comment, ideaId) {
        if (!ideaId) {
            const error = new Error();
            error.status = 400;
            error.message = "No ingreso el id";
            throw error;
        }
        const idea = await _ideaRepository.get(ideaId);
        if (!idea) {
            const error = new Error();
            error.status = 404;
            error.message = "No existe esa idea";
            throw error;
        }
        const createdComment = await _commentRepository.create(comment);
        idea.coments.push(createdComment);
        return await _ideaRepository.update(ideaId, { coments: idea.coments });
    }
}

module.exports = CommentService;