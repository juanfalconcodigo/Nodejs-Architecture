class BaseRepository {

    constructor(model) {
        this.model = model
    }

    async get(id) {
        return await this.model.findById(id);
    }

    async getAll(skip = 1, limit = 5) {
        const start = limit * (skip - 1);
        return await this.model.find({}).skip(start).limit(limit);
    }

    async create(entity) {
        return await this.model.create(entity);
    }

    async update(id, entity) {
        return await this.model.findByIdAndUpdate(id, entity, { new: true, context: 'query', runValidators: true });
    }

    async delete(id) {
        await this.model.findByIdAndDelete(id);
        return true;
    }

}

module.exports = BaseRepository;