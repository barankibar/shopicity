const { verifySignUp } = require("../middleware");
const router = require("express").Router();

const Usercontroller = require("../controllers/user.controller");

router
  .route("/signup")
  .post([verifySignUp.checkDuplicateUsernameOrEmail], Usercontroller.signUp);

module.exports = router;
