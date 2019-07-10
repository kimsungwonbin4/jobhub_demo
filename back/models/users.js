module.exports = (sequlize, DataTypes) => {
  const Users = sequlize.define('Users', {
    email: {
      type: DataTypes.STRING(254),
      allowNull: false,
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