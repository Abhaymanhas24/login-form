import { getAllOrder, createOrders } from "../service/order.service.js";
import { getUserIdById } from "../service/cart.service.js";
import { v4 as uuidv4 } from "uuid";
async function getAllOrderCtrl(request, response) {
  try {
    response.send(await getAllOrder());
  } catch (error) {
    response.send("products not found ");
  }
}
// async function AddToOrderCtrl(request, response) {
//   const { UserId } = request.params;

//   const cartData = await getUserIdById(UserId);
//   console.log(cartData);
//   const Orders = {
//     ...cartData.data,
//     orderId: uuidv4(),
//   };
//   try {
//     await createOrders(Orders);
//     response.status(201).send({ msg: "Our Order Placed", Orders });
//   } catch (error) {
//     response.status(500).send("fail to Order");
//   }
// }
async function AddToOrderCtrl(request, response) {
  const { Id } = request.params;

  //   try {
  // Fetch cart data by UserId
  const cartData = await getUserIdById(Id);
  console.log("Cart Data:", cartData);

  if (!cartData || !cartData.data || cartData.data.products.length === 0) {
    return response.status(404).send({ msg: "Cart is empty or not found" });
  }

  const Orders = {
    ...cartData.data,
    orderId: uuidv4(),
    orderDate: new Date().toISOString(), // Optional: Add order date
  };

  // Create the order
  await createOrders(Orders);

  //   // Optional: Clear the cart after successful order placement
  //   await clearCartByUserId(UserId);

  // Respond with success
  response.status(201).send({ msg: "Order Placed Successfully", Orders });
  //   } catch (error) {
  //     console.error("Order Placement Failed:", error);
  //     response.status(500).send("Failed to place order");
  //   }
}

export { getAllOrderCtrl, AddToOrderCtrl };
