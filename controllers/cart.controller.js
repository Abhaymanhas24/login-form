import { getAllCartItem, createCartProduct } from "../service/cart.service.js";
import { getProductById } from "../service/product.service.js";
import { v4 as uuidv4 } from "uuid";
import { Cart } from "../entities/cart.entity.js";

async function getAllCartItemCtrl(request, response) {
  try {
    response.send(await getAllCartItem());
  } catch (error) {
    //call back funtion we have req and res
    response.send("products not found ");
  }
}
async function AddToCartCtrl(request, response) {
  const data = request.body;
  const id = data.ProductId;
  const addProduct = {
    ...data,
    UserId: uuidv4(),
  };
  try {
    const existingData = await getProductById(id);

    if (existingData.data.ProductId) {
      console.log("helllo");
      await createCartProduct(addProduct);
    } else {
      response.status(404).send({ msg: "Product not found" });
    }
  } catch (error) {
    response.status(500).send("failed to add to cart");
  }
}

async function deleteFromCartByIdCtrl(request, response) {
  const { id } = request.params;

  try {
    const res = await getProductById(id);
    if (res.data) {
      await deleteFromCartById(id);
      response.send({ msg: "deleted successfully", data: res.data });
    } else {
      response.status(404).send({ msg: "Product not found" });
    }
  } catch (error) {
    response.status(500).send("deleted failed");
  }
}
export { getAllCartItemCtrl, AddToCartCtrl, deleteFromCartByIdCtrl };
