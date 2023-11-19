module.exports = (sequelize, DataTypes) => {
  const alias = "User";

  const cols = {
    id: {
      type: DataTypes.UUID, // Tipo de dato UUID
      defaultValue: DataTypes.UUIDV4, // Valor por defecto para generar un UUID
      primaryKey: true,
      allowNull: false,
      unique: true,
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
    cellphone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favourite_aeroline: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  };

  const config = {
    tableName: "users",
    timestamps: false,
  };

  const Usuario = sequelize.define(alias, cols, config);

  return Usuario;
};
