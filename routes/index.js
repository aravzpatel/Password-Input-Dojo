var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => res.status(200).send({ message: "ok" }));

router.post("/validate-password", (req, res, next) => {
    let errors = [];
    const password = req.body.password;
    if (password.length<8){
        errors.push("Password must be at least 8 characters");
    }
    if(!/.*[0-9].*[0-9].*/.test(password)){
        errors.push("Password must contain at least 2 numbers");
    }
    if(!/.*[A-Z].*/.test(password)){
        errors.push("Password must contain at least one capital letter");
    } 
    if(!/.*[!@#$%^&].*/.test(password)){
        errors.push("Password must contain at least one special character");
    }
    if(errors.length>0){
        return res.status(200).send({ message: errors.join("\n") });    
    }
    return res.status(200).send({ message: "ok" });
});

module.exports = router;
