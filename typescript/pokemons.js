"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var fetch = function (url) {
    return axios_1["default"].get(url).then(function (_a) {
        var data = _a.data;
        return data;
    });
};
var getPokemons = function () {
    return fetch("https://pokeapi.co/api/v2/pokemon/").then(function (_a) {
        var results = _a.results;
        return results;
    });
};
var getFirstGen = function () {
    return fetch("https://pokeapi.co/api/v2/generation/generation-i").then(function (res) { return res.names.find(function (_a) {
        var name = _a.language.name;
        return name === "es";
    }); });
};
getFirstGen().then(console.log);
getPokemons().then(console.log);
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHi = function () {
        console.log(this.name);
    };
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
var lau = new User("Laura");
lau.getName();
