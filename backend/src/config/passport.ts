import passport from "passport";
import LocalStrategy from "passport-local";
import User from "../models/User";

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ name: username });
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
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
// Export passport instance
export default passport;
