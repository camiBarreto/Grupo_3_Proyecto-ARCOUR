module.exports = (sequelize, DataType) => {
  const alias = "Products";

  const cols = {
    flight_number: {
      type: DataType.INTEGER,
      prymaryKey: true,
    },
    departure_airport: {
      type: DataType.STRING,
      allowNull: false,
    },
    arrival_airport: {
      type: DataType.STRING,
      allowNull: false,
    },
    departure_date: {
      type: DataType.DATE,
      allowNull: false,
    },
    departure_time: {
      type: DataType.TIME,
      allowNull: false,
    },
    arrival_time: {
      type: DataType.TIME,
      allowNull: false,
    },
    ticket_price: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    flight_duration: {
      type: DataType.TIME,
      allowNull: false,
    },
    id_product: {
      type: DataType.INTEGER,
      allowNull: false,
    },
  };

  const config = {
    tableName: "products",
    timestamps: false,
  };

  const Products = sequelize.define(alias, cols, config);

  return Products;
};
