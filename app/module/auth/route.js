// ExpressJS Core
const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

//Auth controller
const AuthCtrl = require("./controllers/auth.controller");

//register route
router.post("/signup", AuthCtrl.SingUp);

// //verify route
// router.post("/verify", AuthCtrl.Verify);

// //login route
router.post("/signin", AuthCtrl.SingIn);
// //protected route
// router.get(
//   "/protected",
//   passport.authenticate("jwt", { session: false }),
//   AuthCtrl.Protected
// );
// // forget Password
// router.post("/forget", AuthCtrl.Forget);
// // reset password
// router.post("/reset", AuthCtrl.ResetPassword);

module.exports = router;
