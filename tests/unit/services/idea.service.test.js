const { IdeaRepositoryMock } = require('../../mocks');
const { IdeaService } = require('../../../src/services');
const { IdeaModelMock: { ideas, idea } } = require('../../mocks');

describe('Idea Service Test', () => {


    beforeEach(() => {
        jest.clearAllMocks();
    });


    it('Me retorna la cantidad de ideas por usuario', async() => {
        const IdeaRepository = IdeaRepositoryMock;
        IdeaRepository.getUserIdeas.mockReturnValue(ideas);
        const _ideaService = new IdeaService({ IdeaRepository });
        const expected = await _ideaService.getUserIdeas('507f191e810c19729de860ea');
        expect(expected).toMatchObject(ideas);
    });


    it('Me retorna un error al no enviar el codigo de usuario', async() => {
        try {
            const IdeaRepository = IdeaRepositoryMock;
            IdeaRepository.getUserIdeas.mockReturnValue(ideas);
            const _ideaService = new IdeaService({ IdeaRepository });
            await _ideaService.getUserIdeas();
        } catch (err) {
            expect(err).toEqual(new Error('No existe ese usuario'));
        }
    });


    it('Retorna error si no envias el id de la idea para dar like', async() => {
        try {
            const IdeaRepository = IdeaRepositoryMock;
            IdeaRepository.upvoteIdea.mockReturnValue(idea);
            const _ideaService = new IdeaService({ IdeaRepository });
            await _ideaService.upvoteIdea();

        } catch (err) {
            expect(err).toEqual(new Error('No existe ese id'));
        }
    });


    it('Me encuentra la idea por id', async() => {
        const IdeaRepository = IdeaRepositoryMock;
        IdeaRepository.get.mockReturnValue(idea);
        const _ideaService = new IdeaService({ IdeaRepository });
        const expected = await _ideaService.repository.get('5ef1904ed9ec3f2d18298a80');
        expect(expected).toMatchObject(idea);
    });


    it('Retorna error si no envias el id de la idea para dar dislike', async() => {
        try {
            const IdeaRepository = IdeaRepositoryMock;
            IdeaRepository.upvoteIdea.mockReturnValue(idea);
            const _ideaService = new IdeaService({ IdeaRepository });
            await _ideaService.downvoteIdea();

        } catch (err) {
            expect(err).toEqual(new Error('No existe ese id'));
        }
    });

});