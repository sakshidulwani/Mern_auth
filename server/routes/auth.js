const express = require("express");
const router = express.Router();

const { signup,accountActivation ,signin} = require("../controllers/auth");

const {userSignupValidator,userSigninValidator} = require('../validator/auth')
const {runValidator} = require('../validator')

router.post("/signup", userSignupValidator, runValidator,signup);
router.post("/account-activation", accountActivation);
router.post("/signin", userSigninValidator, runValidator,signin);

module.exports = router;
