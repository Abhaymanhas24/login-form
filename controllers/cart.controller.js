import {
  getAllCartItem,
  createCartProduct,
  getUserIdById as getCartByUserId,
  updateCartById,
  deleteFromCartById,
  calculateTotalPrice,
} from "../service/cart.service.js";
import { getProductById } from "../service/product.service.js";

async function getAllCartItemCtrl(request, response) {
  try {
    response.send(await getAllCartItem());
  } catch (error) {
    response.send("products not found ");
  }
}

async function AddToCartCtrl(request, response) {
  const { userId } = request.params;
  const products = request.body;

  const existingCart = await getCartByUserId(userId);
  if (existingCart.data) {
    try {
      console.log(existingCart.data);
      if (existingCart.data.products) {
        console.log(existingCart.data.products);
        const new1 = await updateCartById(existingCart, products);
        response.status(201).send(new1);
      } else {
        response.status(404).send({ msg: "Product not found" });
      }
    } catch (error) {
      response.status(500).send("failed to add to cart");
    }
  } else {
    for (const data of products) {
      const id = data.productId;
      const totalPrice = await calculateTotalPrice(products);
      const addProduct = {
        products: [data],
        totalPrice: totalPrice,
        userId: userId,
      };
      try {
        console.log(id);
        const existingData = await getProductById(id);
        console.log(existingData);
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
}
async function tocheckuserid(request, response) {
  const { userId } = request.params;
  console.log(userId);
  const existingUser = await getCartByUserId(userId);
  response.send(existingUser);
}
async function deleteFromCartByIdCtrl(request, response) {
  const { id } = request.params;

  try {
    const res = await getCartByUserId(id);
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
export {
  getAllCartItemCtrl,
  AddToCartCtrl,
  deleteFromCartByIdCtrl,
  tocheckuserid,
};
