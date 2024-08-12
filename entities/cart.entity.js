import { Entity } from "electrodb";
import { client } from "../util/dbconnections.js";

const Cart = new Entity(
  {
    model: {
      entity: "Cart",
      version: "1",
      service: "CartService",
    },
    attributes: {
      userId: {
        type: "string",
        required: true,
      },
      products: {
        type: "list",
        items: {
          type: "map",
          properties: {
            productId: {
              type: "string",
              required: true,
            },
            quantity: {
              type: "number",
              required: true,
            },
          },
        },
        required: true,
      },
      totalPrice: {
        type: "number",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          facets: ["userId"],
        },
        sk: {
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "cart" }
);

export { Cart };
