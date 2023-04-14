var express = require("express");
var router = express.Router();

const request = require("request");

const apiKey = "bce6396f293d42471199e6cc95ba8390";

const apiBaseUrl = "http://api.themoviedb.org/3";
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const imageBaseUrl = "http://image.tmdb.org/t/p/w300";

router.use(function (req, res, next) {
	res.locals.imageBaseUrl = imageBaseUrl;
	next();
});

/* GET home page. */
router.get("/", function (req, res, next) {
	request.get(nowPlayingUrl, function (err, response, movieData) {
		const parsedData = JSON.parse(movieData);
		res.render("index", {
			parsedData: parsedData.results,
		});
	});
	//res.render("index", { title: "Express" });
});

router.get("/movie/:id", function (req, res, next) {
	const movieUrl = `${apiBaseUrl}/movie/${req.params.id}?api_key=${apiKey}`;
	console.log(movieUrl);
	request.get(movieUrl, function (err, response, movieData) {
		const parsedData = JSON.parse(movieData);
		res.render("single-movie", {
			parsedData: parsedData,
		});
	});
});

router.post("/search", function (req, res, next) {
	const userSearchTerm = req.body.movieSearch;
	const cat = req.body.cat;

	const movieUrl = `${apiBaseUrl}/search/${cat}?query=${userSearchTerm}&api_key=${apiKey}`;
});
module.exports = router;
