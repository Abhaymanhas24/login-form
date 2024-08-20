import { getAllOrder, createOrders } from "../service/order.service.js";
import { getUserIdById } from "../service/cart.service.js";

async function getAllOrderCtrl(request, response) {
  try {
    response.send(await getAllOrder());
  } catch (error) {
    response.send("products not found ");
  }
}
async function AddToOrderCtrl(request, response) {
  const { UserId } = request.params;
  const cartData = await getUserIdById(UserId);
  console.log(cartData);
  const Orders = {
    ...cartData.data,
    orderId: uuidv4(),
  };
  try {
    await createOrders(Orders);
    response.status(201).send({ msg: "Our Order Placed", Orders });
  } catch (error) {
    response.status(500).send("fail to Order");
  }
}

export { getAllOrderCtrl, AddToOrderCtrl };
