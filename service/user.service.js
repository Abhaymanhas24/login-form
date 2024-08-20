import { user } from "../entities/user.entity.js";
import { logindetail } from "../entities/logindetails.entity.js";
async function createUser(adduser) {
  return await user.create(adduser).go();
}
async function getuserbyusername(username) {
  return await user.get({ username: username }).go();
}
async function createLoginUser(adduser) {
  return await logindetail.create(adduser).go();
}
export { createUser, getuserbyusername, createLoginUser };
