import { Router } from "express";
import { checkSchema, validationResult } from "express-validator";
import { authValidationSchema } from "../utils/validationSchemas.mjs";
import { mockUsers } from "../utils/constants.mjs";
import passport from "passport";
import "../strategies/local-strategy.mjs";

const router = Router();

router.post(
  "/api/auth",
  passport.authenticate("local"),
  (request, response) => {
    response.sendStatus(200);
  }
);

router.get("/api/auth/status", (request, response) => {
  console.log("Inside /api/auth/status");
  console.log(request.user);
  console.log(request.session);
  return request.user
    ? response.status(200).send(request.user)
    : response.status(401).send({ msg: "Not authenticated" });
});

router.post("/api/auth/logout", (request, response) => {
  if (!request.user)
    return response.status(401).send({ msg: "Not authenticated" });
  request.logout((err) => {
    if (err) return response.status(400).send({ msg: "Logout failed" });
    response.sendStatus(200);
  });
});

// router.post(
//   "/api/auth",
//   checkSchema(authValidationSchema),
//   (request, response) => {
//     const result = validationResult(request);
//     if (!result.isEmpty())
//       return response.status(400).send({ errors: result.array() });
//     const {
//       body: { username, password },
//     } = request;
//     const findUser = mockUsers.find(
//       (user) => user.username === username && user.password === password
//     );
//     if (!findUser) return response.status(401).send({ msg: "Bad credentials" });
//     request.session.user = findUser;
//     response.status(200).send(findUser);
//   }
// );

// router.get("/api/auth/status", (request, response) => {
//   request.sessionStore.get(request.sessionID, (err, session) => {
//     console.log(session);
//   });
//   return request.session.user
//     ? response.status(200).send(request.session.user)
//     : response.status(401).send({ msg: "Not authenticated" });
// });

export default router;
