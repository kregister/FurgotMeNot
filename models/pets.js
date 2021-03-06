'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pets = sequelize.define('Pets', {
    age: DataTypes.INTEGER,
    pets_name: DataTypes.STRING,
    genus: DataTypes.STRING,
    breed: DataTypes.STRING,
    adopted: DataTypes.BOOLEAN,
    shots: DataTypes.BOOLEAN,
    fixed: DataTypes.BOOLEAN,
    kid_friendly: DataTypes.BOOLEAN,
    cat_friendly: DataTypes.BOOLEAN,
    dog_friendly: DataTypes.BOOLEAN,
    food_aggressive: DataTypes.BOOLEAN,
    house_trained: DataTypes.BOOLEAN,
    image_one: DataTypes.BLOB,
    image_two: DataTypes.BLOB,
    image_three: DataTypes.BLOB,
    image_four: DataTypes.BLOB,
    image_five: DataTypes.BLOB,
    users_id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Pets.belongsTo(models.Users, {
        //           onDelete: "CASCADE",
        //           foreignKey: {
        //             allowNull: false
        //           }
        //   })
      }
    }
  });
  return Pets;
};
