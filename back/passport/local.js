const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = (passport) => {
  passport.use(new LocalStrategy({
    usernameField: 'userId',
    passwordField: 'password',
  }, async (userId, password, done) => {
    try {
      const user = await db.Users.findOne({ where: { userId } });
      if (!user) {
        return done(null, false, { reason: '存在してないメールアドレスです。' });
      }
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        return done(null, user);
      }
      return done(null, false, { reason: 'パスワードを確認してください。' });
    } catch (e) {
      console.error(e);
      return done(e);
    }
  }));
};