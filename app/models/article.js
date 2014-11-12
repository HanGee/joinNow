// Example model


module.exports = function (sequelize, DataTypes) {

    var Article = sequelize.define('Article', {
        title: {
            type: DataTypes.STRING
        },

        content: {
            type: DataTypes.TEXT,
        },

        commentsCount: {
            type: DataTypes.INTEGER
        },

        commentedAt: {
            type: DataTypes.DATE
        },

        firstImageUrl: {
            type: DataTypes.STRING
        },

        authorId: {
            type: DataTypes.INTEGER
        },

        trashed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }


    }, {
        classMethods: {
            associate: function (models) {

                //關聯作者




                Article.hasMany(models.User, {as: 'Members'});
                Article.hasOne(models.User, {as: 'Author', foreignKey: 'AuthorId'});

                //Article.hasOne(models.User, {
                //    as: 'Author'
                //});


                //Article.hasOne(models.User);
                //Article.belongsTo(models.User, {
                //    as: 'Author',
                //    through: 'worker_tasks'
                //});

            }
        }
    });

    return Article;
};
