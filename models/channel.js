'use strict';
module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define('Channel', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Channel.associate = function(models) {
   Channel.belongsToMany(models.User, {through: 'Subscription'});
  };
  return Channel;
};