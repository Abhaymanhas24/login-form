import jwt from "jsonwebtoken";
import { logindetail } from "../entities/logindetails.entity.js";
const auth = async (request, response, next) => {
  const token = request.header("x-auth-token");
  // jwt.verify(token, process.env.SECRET_KEY);
  try {
    const results = await logindetail.get({ token: token }).go();

    if (results.data) {
      next();
    } else {
      throw new Error("Unauthorized");
    }
  } catch (err) {
    response.status(401).send({ msg: err.message });
  }
};
export { auth };
