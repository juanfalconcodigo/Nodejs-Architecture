const { Schema, model } = require('mongoose');

const IdeaSchema = new Schema({
    idea: {
        type: String,
        required: [true, 'Es necesario una idea']
    },
    description: {
        type: String,
        required: false
    },
    upvotes: [{
        type: Boolean,
        required: false
    }],
    downvotes: [{
        type: Boolean,
        required: false
    }],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'El id del usuario es necesario'],
        autopopulate: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment',
        required: false,
        autopopulate: true
    }]
});

IdeaSchema.plugin(require('mongoose-autopopulate'));

module.exports = model('idea', IdeaSchema);