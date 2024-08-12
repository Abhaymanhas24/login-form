import AWS from "aws-sdk";

import "dotenv/config";
// console.log(process.env);

AWS.config.update({
  accessKeyId: process.env.aws_access_Key_Id,
  secretAccessKey: process.env.aws_secret_Access_Key,
  region: process.env.aws_region,
});
const client = new AWS.DynamoDB.DocumentClient();
export { client };
