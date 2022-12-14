"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event_member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  event_member.init(
    {
      event_id: DataTypes.INTEGER,
      members: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "event_member",
    }
  );
  return event_member;
};
