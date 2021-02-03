const express = require("express");
const next = require("next");
const routes = require("./routes");
// dev will be T or F depedning on if it's in development environment
const dev = process.env.NODE_EVN !== "production";
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`> Ready on port ${PORT}`);
  });
});
