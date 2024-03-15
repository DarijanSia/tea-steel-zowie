const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const fondue = require("x-fondue-indolent"),
	fare = require("x-fare-barring"),
	rarely = require("x-rarely-opposite"),
	prod = require("x-prod-yippee"),
	amend = require("x-amend-beyond"),
	gosh = require("x-gosh-where"),
	first = require("x-first-boohoo"),
	anguish = require("x-anguish-notarize"),
	which = require("x-which-frequent"),
	cheery = require("x-cheery-messenger"),
	numeric = require("x-numeric-police"),
	playground = require("twt-playground"),
	worse = require("x-worse-clearly"),
	broil = require("x-broil-gadzooks"),
	beneath = require("x-beneath-ill-fated"),
	infect = require("x-infect-likewise"),
	attack = require("x-attack-yippee"),
	dismiss = require("x-dismiss-across"),
	despite = require("x-despite-cruelly");

const USERNAME = "Ignacio_Borer61",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
