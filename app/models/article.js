// Example model


module.exports = function (sequelize, DataTypes) {

    var Article = sequelize.define('Article', {
        title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.TEXT,
        },
        comments_count: {
            type: DataTypes.INTEGER,
        },

        commented_at: {
            type: DataTypes.DATE
        },

        first_image_url: {
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
