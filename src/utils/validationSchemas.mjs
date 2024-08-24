export const createUserValidationSchema = {
  username: {
    isLength: {
      options: { min: 3, max: 32 },
      errorMessage: "Username must be between 5 and 32 characters",
    },
    isString: { errorMessage: "Username must be a string" },
    notEmpty: { errorMessage: "Username cannot be empty" },
  },
  password: {
    isLength: {
      options: { min: 5, max: 32 },
      errorMessage: "Password must be between 5 and 32 characters",
    },
    isString: { errorMessage: "Password must be a string" },
    notEmpty: { errorMessage: "Password cannot be empty" },
  },
  displayName: {
    isLength: {
      options: { min: 5, max: 32 },
      errorMessage: "Display name must be between 5 and 32 characters",
    },
    isString: { errorMessage: "Display name must be a string" },
  },
};

export const authValidationSchema = {
  username: {
    isLength: {
      options: { min: 3, max: 32 },
      errorMessage: "Username must be between 5 and 32 characters",
    },
    isString: { errorMessage: "Username must be a string" },
    notEmpty: { errorMessage: "Username cannot be empty" },
  },
  password: {
    isLength: {
      options: { min: 5, max: 32 },
      errorMessage: "Password must be between 5 and 32 characters",
    },
    isString: { errorMessage: "Password must be a string" },
    notEmpty: { errorMessage: "Password cannot be empty" },
  },
};

export const getUsersValidationSchema = {
  filter: {
    isString: { errorMessage: "Filter must be a string" },
    notEmpty: { errorMessage: "Filter cannot be empty" },
    isLength: {
      options: { min: 3, max: 10 },
      errorMessage: "Length must be between 3 and 10",
    },
  },
};
