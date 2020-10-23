const {check} = require('express-validator')

exports.userSignupValidator = [
    check('name')
    .not()
    .isEmpty()
    .withMessage("Name is required"),
    check('email')
    
    .isEmail()
    .withMessage("Must be a valid email id"),
    check('password')
    .isLength({min:6})
    .withMessage("password is required"),
];
exports.userSigninValidator = [
    
    check('email')
    .isEmail()
    .withMessage("Must be a valid email id"),

    check('password')
    .isLength({min:6})
    .withMessage("Password is required"),
];