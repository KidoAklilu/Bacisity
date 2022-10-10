// Imports
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

// Static Files
app.use(express.static("public"));
app.use("/scss", express.static(__dirname + "public/scss"));

// Set Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/index");
app.set("view engine", "ejs");

// Routes
app.get("", (req, res) => {
  res.render("home", { title: "Home Page" });
});

// Listen on Port
app.listen(port, () => console.info(`App listening on port ${port}`));
