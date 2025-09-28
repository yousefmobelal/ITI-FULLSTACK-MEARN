import Ajv from "ajv";
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      maxLength: 10,
    },
    email: {
      type: "string",
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    },
    phoneNumber: {
      type: "string",
      pattern: "^01[0-2][0-9]{8}$",
    },
    department: {
      type: "string",
      pattern: "^[0-9a-fA-F]{24}$",
    },
    gender: {
      type: "string",
      enum: ["Male", "Female"],
    },
  },
  required: ["name", "email", "phoneNumber", "department", "gender"],
  additionalProperties: false,
};

export default ajv.compile(schema);
