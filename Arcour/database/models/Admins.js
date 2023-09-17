module.exports = (sequelize, DataType) => {
  const alias = "Admins";

  const cols = {
    id: {
      type: DataType.INTEGER,
      prymaryKey: true,
      autoIncrement: true,
    },
    enterprise: {
      type: DataType.STRING,
      allowNull: false,
    },
    country_origin: {
      type: DataType.STRING,
      allowNull: false,
    },
    email_enterprise: {
      type: DataType.STRING,
      allowNull: false,
    },
    country_route: {
      type: DataType.STRING,
      allowNull: false,
    },
    aeroline_name: {
      type: DataType.STRING,
      allowNull: false,
    },
    contact: {
      type: DataType.STRING,
      allowNull: false,
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
    },
    admin: {
      type: DataType.BOOLEAN,
      allowNull: false,
    },
  };

  const config = {
    tableName: "admins",
    timestamps: false,
  };

  const Admins = sequelize.define(alias, cols, config);

  return Admins;
};
