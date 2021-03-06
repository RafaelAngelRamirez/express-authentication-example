//Install express server
const express = require("express");
const path = require("path");

const app = express();
const ruta = "/dist/express-authentication-example/";

// Serve only the static files form the dist directory
app.use(express.static(__dirname + ruta));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + ruta.concat("index.html")));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
