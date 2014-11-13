// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({

    name: {
        type: String,
    },

    email: {
        type: String,
        unique: true,
        required: true,
        set: function toLower (str) {
            return str.trim().toLowerCase();
        }
    },

    password: {
        type: String,
        get: function(){
            return 'IS_HIDDEN';
        }
    },

    gravatarHash: {
        type: String,
    },

    createdAt: {
        type: Date,
        'default': Date.now
    },

    updatedAt: {
        type: Date,
        'default': Date.now
    },

    trashed: {
        type: Boolean,
        //required: true,
        'default': false
    }

});

UserSchema.pre('save', function(next){
    this.updatedAt = new Date();
    next();
});

UserSchema.set('toObject', { getters: true });
UserSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('User', UserSchema);

