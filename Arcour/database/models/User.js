module.exports = (sequelize, DataTypes) => {
  const alias = "User";

  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    document: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date_birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cell_phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favorite_aeroline: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  const config = {
    tableName: "users",
    timestamps: false,
  };

  const Usuario = sequelize.define(alias, cols, config);

  return Usuario;
};
