
const FacebookStrategy = require('passport-facebook').Strategy;

const { User } = require('../models');

module.exports = (passport) => {


  passport.use(new FacebookStrategy({
    clientID: '2257242391057205',
    clientSecret: '817b015612c89cc17bfb2a3dae345bf5',
    callbackURL: 'http://api.jobhub.tokyo/auth/facebook/callback',
    profileFields: ['id', 'emails', 'name', 'displayName']
  }, (accessToken, refreshToken, profile, done) => {
    try {
      console.log('accessToken==' + accessToken);
      console.log('refreshToken==' + refreshToken);
      console.log('profile==' + JSON.stringify(profile));
      console.log('profile==' + profile.emails[0].value);
      const email = profile.emails[0].value;
      // const exUser = await User.find({ where: { snsId: profile.id, provider: 'facebook' } });
      // if (exUser) {
      //   done(null, exUser);
      // } else {
      //   const newUser = await User.create({
      //     email: profile._json && profile._json.kaccount_email,
      //     nick: profile.displayName,
      //     snsId: profile.id,
      //     provider: 'facebook',
      //   });
      //   done(null, newUser);
      // }
      const user = {
        id: 7,
        email: email
      }
      done(null, user);

    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};

