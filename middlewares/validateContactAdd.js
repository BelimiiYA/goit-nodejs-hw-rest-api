import validateBody from "../decorators/validateBody.js";
import { contactAddSchema } from "../models/Сontact.js";

const validateContactAdd = validateBody(contactAddSchema);

export default validateContactAdd;
