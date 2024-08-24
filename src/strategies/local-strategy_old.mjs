import passport from "passport";
import { Strategy } from "passport-local";
import { mockUsers } from "../utils/constants.mjs";

// Runs when the user logs in
passport.serializeUser((user, done) => {
  console.log("Inside Serializing user");
  console.log(user);
  done(null, user.id);
});

// Runs on every request
passport.deserializeUser((id, done) => {
  console.log("Inside Deserializing user");
  console.log("Deserializing user with ID: ", id);
  try {
    const user = mockUsers.find((user) => user.id === id);
    if (!user) throw new Error("User not found");
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport.use(
  new Strategy((username, password, done) => {
    console.log(`Username: ${username}`);
    console.log(`Password ${password}`);
    try {
      const findUser = mockUsers.find((user) => user.username === username);
      if (!findUser) throw new Error("User not found");
      if (findUser.password !== password) throw new Error("Bad credentials");
      done(null, findUser);
    } catch (error) {
      done(error, null);
    }
  })
);
