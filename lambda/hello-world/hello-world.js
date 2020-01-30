const fs = require("fs").promises;
const path = require("path");

const currentDir = process.env.LAMBDA_TASK_ROOT;

exports.handler = async () => {
  try {
    const content = await fs.readFile(path.join(currentDir, "data.json"), {
      encoding: "utf-8"
    });
    return {
      statusCode: 200,
      body: content
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e
    };
  }
};
