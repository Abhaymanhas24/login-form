import { Entity } from "electrodb";
import { client } from "../util/dbconnections.js";

const user = new Entity(
  {
    model: {
      entity: "user",
      version: "1",
      service: "userService",
    },
    attributes: {
      username: {
        type: "string",
        required: true,
      },
      password: {
        type: "string",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["username"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "user" }
);
export { user };
