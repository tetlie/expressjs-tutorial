import { Router } from "express";

const router = Router();

router.post("/api/cart", (request, response) => {
  if (!request.session.user)
    return response.status(401).send({ msg: "Not authenticated" });
  const { body: item } = request;
  const { cart } = request.session;
  if (cart) {
    cart.push(item);
  } else {
    request.session.cart = [item];
  }
  return response.status(201).send(item);
});

router.get("/api/cart", (request, response) => {
  if (!request.session.user)
    return response.status(401).send({ msg: "Not authenticated" });

  return response
    .status(201)
    .send({ cart: request.session.cart, user: request.session.user } ?? []);
});

export default router;
