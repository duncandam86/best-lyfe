var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // firstName: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     validate: {
    //         len: [1]
    //     }
    // },
    // lastName: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     validate: {
    //         len: [1]
    //     }
    // },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
    // zipCode: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    // favorsGiven: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    // favorsTaken: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    // isEligible: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: true
    // }
  });

  User.associate = function(models) {
    // Associating User with Favors
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Favor, {
      onDelete: "cascade"
    });
  };

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return User;
};
