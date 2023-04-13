const express = require("express");
const app = express();

function validateUser(req, res, next) {
	res.locals.validated = true;
	console.log("VALIDATED RAN!");
	next();
}

app.use(validateUser);
app.get("/", (req, res) => {
	res.send("<h1>Main Page</h1>");
});
app.listen(3000);
