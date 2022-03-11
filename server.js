//Require in Express and our routers to add to our express app
const express = require("express");
const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");

// Initialising our express application and declaring our PORT
const app = express();
const PORT = process.env.PORT || 3001;

//Set up middleware and the app to use my routers
// .json recognises the request as a JSON Object
app.use(express.json());
// .urlencoded recognises the request as a String or Array
app.use(express.urlencoded({ extended: true }));
// This determines the file that is being served by the server
app.use(express.static("public"));

// Setting paths so the requests can go to the correct router
app.use("/api", apiRouter);
app.use("/", htmlRouter);

app.listen(PORT, () => {
  console.log("Application running successfully!");
});
