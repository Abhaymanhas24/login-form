import {
  getAllCartItem,
  createCartProduct,
  getUserIdById,
} from "../service/cart.service.js";
import { getProductById } from "../service/product.service.js";

async function getAllCartItemCtrl(request, response) {
  try {
    response.send(await getAllCartItem());
  } catch (error) {
    //call back funtion we have req and res
    response.send("products not found ");
  }
}
async function AddToCartCtrl(request, response) {
  const { userId } = request.params;
  const data = request.body;
  const id = data.productId;
  const existingUser = getUserIdById(userId);
  if (existingUser) {
  } else {
    const addProduct = {
      products: [data],
      totalPrice: 0,
      userId: userId,
    };
    try {
      const existingData = await getProductById(id);
      if (existingData.data.ProductId) {
        console.log(existingData.data.ProductId);
        await createCartProduct(addProduct);
        response.status(201).send(addProduct);
      } else {
        response.status(404).send({ msg: "Product not found" });
      }
    } catch (error) {
      response.status(500).send("failed to add to cart");
    }
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
