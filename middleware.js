module.exports = reqFilter = (req, resp, next) => {
    if (req.query.age == null) {
        resp.send("please provide age");
    }
    else if (req.query.age < 18) {
        resp.send("you cannot access this page");
    }
    else {
        next();
        // needs to be called to execute further code
    }
}