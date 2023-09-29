module.exports = (sequelize, DataTypes) => {
  const alias = "Admin";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    enterprise: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country_origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email_enterprise: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country_route: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aeroline_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
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
