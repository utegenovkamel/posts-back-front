'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post);
    }
  }

  User.init(
    {
      Username: { type: DataTypes.STRING, allowNull: false, unique: true },
      Firstname: { type: DataTypes.STRING, allowNull: false },
      Lastname: { type: DataTypes.STRING },
      Password: { type: DataTypes.STRING, allowNull: false },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true },
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );

  return User;
};
