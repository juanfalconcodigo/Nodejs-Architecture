const { Idea } = require('../../../src/models/');
const { IdeaRepository } = require('../../../src/repositories');
const { IdeaModelMock: { idea, ideas }, UserModelMock: { user } } = require('../../mocks');
const mockingoose = require('mockingoose').default;

describe('Idea Repository Test', () => {
    beforeEach(() => {
        mockingoose.resetAll();
        jest.clearAllMocks();
    });

    it('Retorna ideas por id de author', async() => {
        const _ideas = [...ideas];
        mockingoose(Idea).toReturn(_ideas, "find");
        const _ideaRepository = new IdeaRepository({ Idea });
        const expected = await _ideaRepository.getUserIdeas(user._id);
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_ideas);
    });

    it('Retorna la idea al enviarle su id correspondiente', async() => {
        const _idea = {...idea };
        mockingoose(Idea).toReturn(_idea, 'findOne');
        const _ideaRepository = new IdeaRepository({ Idea });
        const expected = await _ideaRepository.get(idea._id);
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_idea);
    });


});