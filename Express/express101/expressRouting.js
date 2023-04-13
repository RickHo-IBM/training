const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
	//res.send("<h1>GET method</h1>");
	const htmlFile = fs.readFileSync("node.html");
	res.send(htmlFile);
});
app.post("/", (req, res) => {
	res.send("<h1>POST method</h1>");
});
app.delete("/", (req, res) => {
	res.send("<h1>DELETE method</h1>");
});
app.put("/", (req, res) => {
	res.send("<h1>PUT method</h1>");
});

app.listen(3000);
