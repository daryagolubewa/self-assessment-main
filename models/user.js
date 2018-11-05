'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  User.associate = function(models) {
    User.hasMany(models.Channel);
  };

  User.checkInfo = async (userEmail, userPass) => {
    let user = await User.findAll({
        where: {
            email: userEmail,
            password: userPass
        }
    })
      return user;
  };

  return User;
};




