//Require in Express and our routers to add to our express app
const express = require("express");
const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");

// Initialising our express application and declaring our PORT
const app = express();
const PORT = process.env.PORT || 3001;

//Set up middleware and the app to use my routers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRouter);
app.use("/", htmlRouter);

app.listen(PORT, () => {
  console.log("Appliocation running successfully!");
});

/* 
app.listen(PORT, function() {
  "Appliocation running successfully!";
});
*/
