// import jwt from "jsonwebtoken";
// import { logindetail } from "./entities/logindetails.entity.js";
// // import { Session } from "../entities/session.entity.js";
// // import { Users } from "../entities/users.entity.js";
// // // middleware are function

// // const ADMIN = 0;

// // const authIsAdmin = async (request, response, next) => {
// //   const token = request.header("x-auth-token");
// //   try {
// //     // jwt.verify(token, process.env.SECRET_KEY);
// //     const results = await Session.get({ token: token }).go();
// //     const role = await Users.get({ userName: results.data.userName }).go();
// //     // console.log(results, role);
// //     // console.log(role)

// //     if (role.data.roleId === ADMIN) {
// //       // console.log("Yes he is admin ")
// //       next();
// //     } else {
// //       throw new Error("Unauthorized");
// //     }
// //     // next();
// //   } catch (err) {
// //     response.status(401).send({ msg: err.message });
// //   }
// // };

// // export { authIsAdmin };
// const results = await logindetail.get(token).go();
// console.log(results);
