import { Products } from "../entities/product.entity.js";
async function getAllProducts() {
  return (await Products.scan.go()).data;
}
async function createProduct(addProduct) {
  await Products.create(addProduct).go();
}

async function updateProductById(existingData, updatedata) {
  return await Products.put({
    ...existingData.data,
    ...updatedata,
  }).go();
}

export { getAllProducts, createProduct, updateProductById };
