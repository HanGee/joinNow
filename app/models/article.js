// Example model


module.exports = function (sequelize, DataTypes) {

    var Article = sequelize.define('Article', {
        title: {
            type: DataTypes.STRING,
        },

        content: {
            type: DataTypes.TEXT,
        },

        commentsCount: {
            type: DataTypes.INTEGER,
        },

        commentedAt: {
            type: DataTypes.DATE
        },

        firstImageUrl: {
            type: DataTypes.STRING,
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
                Article.belongsTo(models.User);

            }
        }
    });

    return Article;
};
