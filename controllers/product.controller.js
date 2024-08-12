import {
  getAllProducts,
  createProduct,
  updateProductById,
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
    const existingData = await getproductById(id);
    if (existingData.data) {
      const result = await updateProductById(existingData, updatedata);
      response.send(result);
    } else {
      response.status(404).send({ msg: "Movie not found" });
    }
  } catch (error) {
    response.status(500).send("failed to edit the movie");
  }
  // console.log(id, data, movieIdx);
}

export { getAllProductCtrl, AddProductCtrl, updateProductByIdctrl };
