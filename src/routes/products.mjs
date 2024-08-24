import { Router } from "express";

const router = Router();

router.get("/api/products", (request, response) => {
  console.log(request.headers.cookie);
  console.log(request.cookies);
  console.log(request.signedCookies.hello);
  if (request.signedCookies.hello && request.signedCookies.hello === "world")
    return response.send([
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 200 },
      { id: 3, name: "Product 3", price: 300 },
    ]);

  response.status(403).send({ msg: "Sorry, you need the correct cookie." });
});

export default router;
