let _ideaService = null;

class IdeaController {

    constructor({ IdeaService }) {
        _ideaService = IdeaService;
    }

    async get(req, res) {
        const { ideaId } = req.params;
        const idea = await _ideaService.get(ideaId);
        return res.send(idea);
    }

    async getAll(req, res) {
        const ideas = await _ideaService.getAll();
        return res.send(ideas);
    }

    async create(req, res) {
        const { boby } = req;
        const createdIdea = await _ideaService.create(boby);
        return res.status(201).send(createdIdea);
    }

    async update(req, res) {
        const { body } = req;
        const { ideaId } = req.params;
        const updateIdea = await _ideaService.update(ideaId, body);
        return res.send(updateIdea);
    }

    async delete(req, res) {
        const { ideaId } = req.params;
        const deleteIdea = await _ideaService.delete(ideaId);
        return res.send(deleteIdea);
    }

    async getUserIdeas(req, res) {
        const { userId } = req.params;
        const ideas = await _ideaService.getUserIdeas(userId);
        return res.send(ideas);
    }

    async upvoteIdea() {
        const { ideaId } = req.params;
        const idea = await _ideaService.upvoteIdea(ideaId);
        return res.send(idea);
    }

    async downvoteIdea() {
        const { ideaId } = req.params;
        const idea = await _ideaService.downvoteIdea(ideaId);
        return res.send(idea);
    }

}

module.exports = IdeaController;