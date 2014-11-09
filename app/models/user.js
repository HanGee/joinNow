// Example model


module.exports = function (sequelize, DataTypes) {

    var User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING
        },
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here

            }
        }
    });

    return User;
};
