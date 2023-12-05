import validateBody from "../decorators/validateBody.js";
import { contactPatchSchema } from "../models/Сontact.js";

const validateContactPatch = validateBody(contactPatchSchema);

export default validateContactPatch;
