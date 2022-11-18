var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => res.status(200).send({ message: "ok" }));
router.post("/",(req, res, next) => {
    pass = req.body.password
    if (pass.length<8) {
        return res.status(200).send({ status:false, message: "Password must be at least 8 characters" })
    }

    var r = /\d{2,}/;
    if (!pass.match(r)){
        return res.status(200).send({ status:false, message: "The password must contain at least 2 numbers" })
    }
    
    return res.status(200).send({ status:true,message: "ok"})
});
module.exports = router;
