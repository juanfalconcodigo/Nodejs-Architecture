const { Comment } = require('../../../src/models');
const { CommentRepository } = require('../../../src/repositories');
const { CommentModelMock: { comments, commentSave }, IdeaModelMock: { idea } } = require('../../mocks');
const mockingoose = require('mockingoose').default;



describe('Comment Repository Test', () => {
    beforeEach(() => {
        mockingoose.resetAll();
        jest.clearAllMocks();
    });

    it('AL crear un comentario retorna la idea más el nuevo comentario agregado', async() => {
        const _comment = {...commentSave };
        mockingoose(Comment).toReturn(_comment, 'save');
        const _commentRepository = new CommentRepository({ Comment });
        const expected = await _commentRepository.create({ author: '5eec16b9a4d76b2eec69890e', comment: 'Ojala lo hagas bien' });
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_comment);
    });

});