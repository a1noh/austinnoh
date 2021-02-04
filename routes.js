const routes = require("next-routes");

//render portfolio -> navigate to portfolios/id
module.exports = routes().add("portfolio", "/portfolios/:id");
