module.exports = function (sequelize, DataTypes) {
  var Favor = sequelize.define("Favor", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    imageURL: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    hasItem: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    hasBeenClaimed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    claimedBy: {
      type: DataTypes.INTEGER
    },
    claimedWhen: {
      type: DataTypes.DATE
    },
    userEmail: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });


  // Favor.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Favor.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Favor;
};