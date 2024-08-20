import { Entity } from "electrodb";
import { client } from "../util/dbconnections.js";

const logindetail = new Entity(
  {
    model: {
      entity: "user",
      version: "1",
      service: "userService",
    },
    attributes: {
      token: {
        type: "string",
        required: true,
      },
      username: {
        type: "string",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["token"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "service" }
);
export { logindetail };
