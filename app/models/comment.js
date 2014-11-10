// Example model


module.exports = function (sequelize, DataTypes) {

    var Comment = sequelize.define('Comment', {
        title: {
            type: DataTypes.STRING
        },

        content: {
            type: DataTypes.TEXT,
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
                Comment.belongsTo(models.Article);
                Comment.belongsTo(models.User);

            }
        }
    });

    return Comment;
};
