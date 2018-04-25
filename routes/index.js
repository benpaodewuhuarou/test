const authRoutes = require("./authRoutes");
// const userRoutes = require("./api");
const path = require("path");

const constructorMethod = (app, passport) => {
    app.use("/", authRoutes(passport));
    //   app.use("/users", userRoutes);
    //   app.get("/about", (req, res) => {
    //     res.sendFile(path.resolve("static/about.html"));
    //   });

    //   app.use("*", (req, res) => {
    //     res.redirect("/posts");
    //   });
};

module.exports = constructorMethod;