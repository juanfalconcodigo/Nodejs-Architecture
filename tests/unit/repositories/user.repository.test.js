const { UserRepository } = require('../../../src/repositories');
const { User } = require('../../../src/models');
const { UserModelMock: { user, users } } = require('../../mocks');
const mockingoose = require('mockingoose').default;


describe('User Repository Tests', () => {

    beforeEach(() => {
        mockingoose.resetAll();
        jest.clearAllMocks();
    });

    it('Retorna el usuario por su id', async() => {
        const _user = {...user };
        delete _user.password;
        mockingoose(User).toReturn(user, "findOne");
        const _userRepository = new UserRepository({ User });
        const expected = await _userRepository.get(_user._id);
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
    });

    it('Retorna el usuario por su nombre', async() => {
        const _user = {...user };
        delete _user.password;
        mockingoose(User).toReturn(user, "findOne");
        const _userRepository = new UserRepository({ User });
        const expected = await _userRepository.getUserByUsername(_user.name);
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
    });

    it("Retorna un arreglo de usuarios", async() => {
        const _users = [...users];
        const resp = [];
        for (let e of _users) {
            delete e.password;
            resp.push(e);
        }

        mockingoose(User).toReturn(resp, "find");
        const _userRepository = new UserRepository({ User });
        const expected = await _userRepository.getAll();
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(resp);
    });

    it("Actualiza un usuario por id", async() => {
        const _user = {...user };
        delete _user.password;
        mockingoose(User).toReturn(_user, 'findOneAndUpdate');
        const _userRepository = new UserRepository({ User });
        const expected = await _userRepository.update(user._id, { name: "Juan" });
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
    });

    it("Eliminamos un usuario por id", async() => {
        mockingoose(User).toReturn(user, "findOneAndDelete");
        const _userRepository = new UserRepository({ User });
        const expected = await _userRepository.delete(user._id);
        expect(JSON.parse(JSON.stringify(expected))).toEqual(true);
    });

});