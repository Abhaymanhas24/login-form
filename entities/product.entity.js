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
