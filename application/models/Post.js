'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {
            Post.belongsTo(models.User, {
                foreignKey: {
                    allowNull: false,
                },
                onDelete: 'restrict',
            });
        }
    }

    Post.init(
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

    return Post;
};

