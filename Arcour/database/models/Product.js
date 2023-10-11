module.exports = (sequelize, DataTypes) => {
  const alias = "Product";

  const cols = {
    flight_number: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
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
    },
  };

  const config = {
    tableName: "products",
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

  return Product;
};
