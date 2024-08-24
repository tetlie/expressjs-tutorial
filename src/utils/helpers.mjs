import bcrypt from "bcrypt";

// Number of rounds to use for hashing
const saltRounds = 10;

export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  console.log(salt);
  return bcrypt.hashSync(password, salt);
};

export const comparePasswords = (plain, hashed) => {
  return bcrypt.compareSync(plain, hashed);
};
