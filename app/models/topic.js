// Example model


module.exports = function(sequelize, DataTypes) {

    var Topic = sequelize.define('Topic', {

        title: {
            type: DataTypes.STRING,
        },
        url: {
            type: DataTypes.STRING,
        },
        text: {
            type: DataTypes.STRING,
        },

    }, {
        classMethods: {
            associate: function(models) {

                //關聯作者
                Topic.belongsTo(models.User, {
                    as: 'author'
                });

            }
        }
    });

    return Topic;
};
