const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user.model");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(options, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({ _id: jwt_payload.id });
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  })
);

// const passportJWT = require("passport-jwt");

// const JwtStrategy = require("passport-jwt").Strategy,
//   ExtractJwt = require("passport-jwt").ExtractJwt;
// const opts = {};
// const UserModel = require("../models/user.model");
// const passport = require("passport");
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = process.env.JWT_SECRET;

// passport.use(
//   new JwtStrategy(opts, function (jwt_payload, done) {
//     UserModel.findOne({ id: jwt_payload.id }, function (err, user) {
//       if (err) {
//         return done(err, false);
//       }
//       if (user) {
//         return done(null, user);
//       } else {
//         return done(null, false);
//       }
//     });
//   })
// );
