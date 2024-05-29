"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authApi_1 = require("./authApi");
var TOKEN = process.env.GITHUB_TOKEN;
var BASE_URL = "https://api.github.com";
var ORG_NAME = "stackbuilders";
var BASE_URL_ORG = "https://api.github.com/orgs/".concat(ORG_NAME, "/repos");
console.log((0, authApi_1.connectToGithub)(TOKEN, BASE_URL, ORG_NAME));
