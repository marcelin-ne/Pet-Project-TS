import { connectToGithub } from "./authApi";

const TOKEN = process.env.GITHUB_TOKEN;
const BASE_URL = "https://api.github.com";
const ORG_NAME = "stackbuilders";
const BASE_URL_ORG = `https://api.github.com/orgs/${ORG_NAME}/repos`;


console.log(connectToGithub(TOKEN,BASE_URL,ORG_NAME));