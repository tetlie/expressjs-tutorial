import passport from "passport";
import { Strategy } from "passport-local";
import { mockUsers } from "../utils/constants.mjs";
import { User } from "../mongoose/schemas/users.mjs";

// Runs when the user logs in
passport.serializeUser((user, done) => {
  console.log("Inside Serializing user");
  console.log(user);
  done(null, user.id);
});

// Runs on every request
passport.deserializeUser(async (id, done) => {
  console.log("Inside Deserializing user");
  console.log("Deserializing user with ID: ", id);
  try {
    const user = await User.findById(id);
    if (!user) throw new Error("User not found");
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport.use(
  new Strategy(async (username, password, done) => {
    try {
      const findUser = await User.findOne({
        username,
      });
      if (!findUser) throw new Error("User not found");
      if (findUser.password !== password) throw new Error("Bad credentials");
      done(null, findUser);
    } catch (error) {
      done(error, null);
    }
  })
);
