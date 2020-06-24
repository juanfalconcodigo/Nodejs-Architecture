const { HomeService } = require('../../../src/services');
const { HomeModelMock } = require('../../mocks')
describe('Home Service Test', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('Retorna un mensaje que es un string', async() => {
        const _homeService = new HomeService();
        const expected = await _homeService.index();
        expect(expected).toMatchObject(HomeModelMock);
    });


});