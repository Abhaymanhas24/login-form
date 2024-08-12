import {
  getAllProducts,
  createProduct,
  updateProductById,
  getProductById,
  deleteProductById,
} from "../service/product.service.js";
import { v4 as uuidv4 } from "uuid";
async function getAllProductCtrl(request, response) {
  try {
    response.send(await getAllProducts());
  } catch (error) {
    //call back funtion we have req and res
    response.send("products not found ");
  }
}
async function AddProductCtrl(request, response) {
  const data = request.body;
  const addProduct = {
    ...data,
    ProductId: uuidv4(),
  };
  try {
    await createProduct(addProduct);

    response.status(201).send(addProduct);
  } catch (error) {
    response.status(500).send("fail to add Product"); //something bad happend on serve is 500
  }
  // data.movieId = uuidv4();
}
async function updateProductByIdctrl(request, response) {
  const { id } = request.params;
  const updatedata = request.body; //updated data
  try {
    const existingData = await getProductById(id);
    if (existingData.data) {
      const result = await updateProductById(existingData, updatedata);
      response.send(result.data);
    } else {
      response.status(404).send({ msg: "Movie not found" });
    }
  } catch (error) {
    response.status(500).send("failed to edit the movie");
  }
}
async function deleteProductByIdCtrl(request, response) {
  const { id } = request.params;

  try {
    const res = await getProductById(id);
    if (res.data) {
      await deleteProductById(id);
      response.send({ msg: "deleted successfully", data: res.data });
    } else {
      response.status(404).send({ msg: "Product not found" });
    }
  } catch (error) {
    response.status(500).send("deleted failed");
  }
}

export {
  getAllProductCtrl,
  AddProductCtrl,
  updateProductByIdctrl,
  deleteProductByIdCtrl,
};
