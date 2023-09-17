module.exports = (sequelize, DataType) => {
  const alias = "Users";

  const cols = {
    id: {
      type: DataType.INTEGER,
      prymaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataType.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataType.STRING,
      allowNull: false,
    },
    gender: {
      type: DataType.STRING,
      allowNull: false,
    },
    document: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    date_birth: {
      type: DataType.DATE,
      allowNull: false,
    },
    cell_phone: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
    },
    country: {
      type: DataType.STRING,
      allowNull: false,
    },
    favorite_aeroline: {
      type: DataType.STRING,
      allowNull: false,
    },
    id_product: {
      type: DataType.INTEGER,
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
