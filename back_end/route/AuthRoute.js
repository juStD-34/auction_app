const { Signup } = require("../controller/AuthController");
const {Login} = require("../controller/AuthController");
const {userVerification} = require("../Middleware/Middleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/signin", Login);
router.post('/',userVerification)
module.exports = router;