const routes = require("next-routes");

//render portfolio -> navigate to portfolio/id
module.exports = routes().add("portfolio", "/portfolios/:id");
