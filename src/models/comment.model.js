const { Schema, model } = require('mongoose');

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

CommentSchema.plugin(require('mongoose-autopopulate'));

module.exports = model('comment', CommentSchema);