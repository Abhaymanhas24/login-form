import { Entity } from "electrodb";
import { client } from "../util/dbconnections.js";

const Order = new Entity(
  {
    model: {
      entity: "Order",
      version: "1",
      service: "OrderService",
    },
    attributes: {
      orderId: {
        type: "string",
        required: true,
      },
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
      orderDate: {
        type: "string",
        required: true,
      },
      status: {
        type: "string",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          facets: ["orderId"],
        },
        sk: {
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "order" }
);

export { Order };
