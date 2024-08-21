import { getAllOrder, createOrders } from "../service/order.service.js";
import { getUserIdById } from "../service/cart.service.js";
import { v4 as uuidv4 } from "uuid";
import { deleteFromCartById } from "../service/cart.service.js";
import { usernameToken } from "../service/user.service.js";
async function getAllOrderCtrl(request, response) {
  try {
    response.send(await getAllOrder());
  } catch (error) {
    response.send("products not found ");
  }
}

async function AddToOrderCtrl(request, response) {
  const token = request.headers["x-auth-token"];
  const userfromtoken = await usernameToken(token);

  try {
    // Fetch cart data by UserId
    const cartData = await getUserIdById(userfromtoken.data.username);
    console.log("Cart Data:", cartData);

    if (!cartData.data || cartData.data.products.length === 0) {
      return response.status(404).send({ msg: "Cart is empty or not found" });
    }

    const Orders = {
      ...cartData.data,
      orderId: uuidv4(),
      orderDate: new Date().toString(),
      status: "pending",
    };
    console.log(Orders);
    // Create the order
    await createOrders(Orders);

    await deleteFromCartById(userfromtoken.data.username);

    response.status(201).send({ msg: "Order Placed Successfully", Orders });
  } catch (error) {
    console.error("Order Placement Failed:", error);
    response.status(500).send("Failed to place order");
  }
}

export { getAllOrderCtrl, AddToOrderCtrl };
