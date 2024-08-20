import { Entity } from "electrodb";
import { client } from "../util/dbconnections.js";

const Products = new Entity(
  {
    model: {
      entity: "Products",
      version: "1",
      service: "ProductsService",
    },
    attributes: {
      ProductId: {
        type: "string",
        required: true,
      },
      name: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
        required: true,
      },
      price: {
        type: "number",
        required: true,
      },
      category: {
        type: "string",
        required: true,
      },
      stockQuantity: {
        type: "number",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["ProductId"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
    // add your DocumentClient and TableName as a second parameter
  },
  { client, table: "products" }
);
export { Products };

// const prods = await Products.get([
//   {
//     ProductId: "7c209fe3-2bbf-4861-a549-b8993b528e55",
//     quantity: 7,
//   },
//   {
//     ProductId: "7c209fe3-2bbf-4861-a549-b8993b528e05",
//     quantity: 7,
//   },
// ]).go();

// console.log(prods);
