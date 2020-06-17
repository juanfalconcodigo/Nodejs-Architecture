const { Schema, model } = require('mongoose');
const mongooseAutopopulate = require('mongoose-autopopulate');

const CommentSchema = new Schema({
    comment: {
        type: String,
        required: [true, 'Es necesario el comentario']
    },
    description: {
        type: String,
        required: false
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'El id del usuario es necesario'],
        autopopulate: true
    }
});

CommentSchema.plugin(mongooseAutopopulate());

module.exports = model('comment', CommentSchema);