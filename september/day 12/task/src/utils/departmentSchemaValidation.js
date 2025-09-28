import Ajv from "ajv";

const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    courses: {
      type: "array",
      items: {
        type: "string",
        pattern: "^[0-9a-fA-F]{24}$",
      },
      uniqueItems: true,
    },
  },
  required: ["name", "courses"],
  additionalProperties: false,
};

export default ajv.compile(schema);
