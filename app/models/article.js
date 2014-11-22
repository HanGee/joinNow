// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema({

    title: {
        type: String,
        'default': ''
    },

    content: {
        type: String,
        'default': ''
    },

    githubUrl: {
        type: String,
        'default': ''
    },

    author: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User'
    },

    members: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }],

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
        required: true,
        'default': false
    }

});


ArticleSchema.pre('save', function(next){
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('Article', ArticleSchema);

