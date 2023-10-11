module.exports = (sequelize, DataTypes) => {
  const alias = "Product";

  const cols = {
    flight_number: {
      type: DataTypes.UUID, // Tipo de dato UUID
      defaultValue: DataTypes.UUIDV4, // Valor por defecto para generar un UUID
      primaryKey: true,
      allowNull: false,
    },
    departure_airport: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arrival_airport: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    departure_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    departure_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arrival_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ticket_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    flight_duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  };

  const config = {
    tableName: "products",
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

  return Product;
};
