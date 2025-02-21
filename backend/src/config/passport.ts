import passport from "passport";
import { LocalStrategy } from "passport-local";
import User from "../models/User.js";

export function configurePassport() {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" }, // Tell Passport to use "email" instead of "username"
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email });
          if (!user) {
            return done(null, false, { message: "Incorrect email" });
          }
          if (user.password !== password) {
            return done(null, false, { message: "Incorrect password" });
          }
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      },
    ),
  );

  passport.serializeUser((user, done) => {
    console.log("serializing user");
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    console.log("deserializing user");
    try {
      const user = await User.findById(
        id,
        "-password -__v -createdAt -updatedAt -__v",
      );

      done(null, user);
    } catch (err) {
      done(err);
    }
  });
}
