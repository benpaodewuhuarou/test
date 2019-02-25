const authRoutes = require("./authRoutes");
const productController = require('./productController');
// const userRoutes = require("./api");
const path = require("path");

const userController = require("./userController");
const purchaseController = require("./purchaseController");
const constructorMethod = (app, passport) => {
    app.use("/auth", authRoutes(passport));
    app.use('/product', productController());
    app.use("/user", userController);
    app.get('/sucess', (res, rep) => {
        rep.send(true);
    })
    app.get('/failure', (res, rep) => {
            rep.send(false);
        })
        //   app.use("/users", userRoutes);
        //   app.get("/about", (req, res) => {
        //     res.sendFile(path.resolve("static/about.html"));
        //   });
    app.use("/purchase", purchaseController);
    //   app.use("/users", userRoutes);
    //   app.get("/about", (req, res) => {
    //     res.sendFile(path.resolve("static/about.html"));
    //   });

    //   app.use("*", (req, res) => {
    //     res.redirect("/posts");
    //   });
};

module.exports = constructorMethod;