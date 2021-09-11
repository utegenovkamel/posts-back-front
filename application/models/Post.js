'use strict';
const { Model } = require('sequelize');

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
      Title: { type: DataTypes.STRING(100), allowNull: false },
      Description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Post',
    },
  );

  return Post;
};
