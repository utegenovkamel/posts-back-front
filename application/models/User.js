'use strict';
const {Model} = require('sequelize');
const BCrypt = require('bcrypt');

const PreconditionRequiredError = require('../../errors/PreconditionRequiredError');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Post);
        }
    }

    User.init(
        {
            Password: {type: DataTypes.STRING, allowNull: false},
            Email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {isEmail: true},
            },
        },
        {
            sequelize,
            modelName: 'User',
        },
    );

    return User;
};

