const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js");
const { signupSchema, loginSchema } = require("../validators/authValidator.js");
const validate = require("../middleware/validateMiddleware.js");

// router
router.route("/").get(authController.home);
router.route("/register").post(validate(signupSchema), authController.register);
router.route("/login").post(validate(loginSchema), authController.login);

module.exports = router;
