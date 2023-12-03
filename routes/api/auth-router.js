import express from "express";

import authController from "../../controllers/auth-controller.js";

import validateUserRegister from "../../middleware/validateUserRegister.js";
import validateUserLogin from "../../middleware/validateUserLogin.js";
import validateUserUpdate from "../../middleware/validateUserUpdate.js";

import authentificate from "../../middleware/authentificate.js";
import upload from "../../middleware/upload.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  upload.single("avatar"),
  validateUserRegister,
  authController.register
);

authRouter.post("/login", validateUserLogin, authController.login);

authRouter.post("/logout", authentificate, authController.logout);

authRouter.get("/current", authentificate, authController.getCurrent);

authRouter.patch(
  "/current",
  authentificate,
  validateUserUpdate,
  authController.updateCurrent
);

authRouter.patch(
  "/avatars",
  authentificate,
  upload.single("avatar"),
  authController.updateAvatar
);

export default authRouter;
