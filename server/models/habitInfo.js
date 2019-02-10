module.exports = function(sequelize, DataTypes) {
  var Habits = sequelize.define("HabitInfo", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    comment: {
      type: DataTypes.TEXT
    },
    time: {
      type: DataTypes.TIME
    },
    consecutive: {
      type: DataTypes.INTEGER
    },
    longestStreak: {
      type: DataTypes.INTEGER
    },
    totalDays: {
      type: DataTypes.INTEGER
    },
    recordArray: {
      //type: DataTypes.ARRAY(DataTypes.BOOLEAN)
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue("recordArray").split(",");
      },
      set(val) {
        this.setDataValue("recordArray", val.join(","));
      }
    }
  });

  Habits.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Habits.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Habits;
};
