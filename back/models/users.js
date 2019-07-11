module.exports = (sequlize, DataTypes) => {
  const Users = sequlize.define('Users', {
    email: {
      type: DataTypes.STRING(254),
      allowNull: true,
    },
    userId: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    }
  }, {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });

  return Users;
};