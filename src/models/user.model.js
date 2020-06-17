const { Schema, model } = require('mongoose');
const { compareSync, hashSync, genSaltSync } = require('bcrypt');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'En necesario el nombre']
    },
    username: {
        type: String,
        required: [true, 'En necesario el nombre usuario']
    },
    password: {
        type: String,
        required: [true, 'En necesario la contraseña']
    }
});


UserSchema.methods.toJSON = function() {
    let user = this.toObject();
    delete user.password;
    return user;
}

UserSchema.methods.comparePasswords = function(password) {
    return compareSync(password, this.password);
}

UserSchema.pre("save", async function(next) {
    let user = this;
    if (!user.isModified('password')) {
        return next();
    }
    const salt = genSaltSync(10);
    let passwordEncrypted = hashSync(user.password, salt);
    user.password = passwordEncrypted;
    next();
});


module.exports = model('user', UserSchema);