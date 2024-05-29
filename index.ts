import * as fs from 'fs';
import { filterRepositoriesWithMoreThanFiveStars, getLastFiveUpdatedRepositories, getTopFiveRepositoriesByStars, listRepositoriesAlphabeticallyWithoutH, sumOfAllRepositoryStars, validateRepositories } from './repository';
// const fs = require('fs');
// import fs from 'fs'; This not work ask why

const repositories_psth='resume_repositories.json'
const rawData = fs.readFileSync(repositories_psth, 'utf-8')
const repositories = JSON.parse(rawData);


// console.log("repositories:" , repositories);

// 1.l Validate each reapository repositories in repositories
//!Ask
// Object.values(repositories).map((repo: any) => {
//     validateRepositories(repo); 
// });

//1. Repositories with more than 5 stars
console.log("Repositories with more than 5 stars") ;
const filterRepositories = filterRepositoriesWithMoreThanFiveStars(repositories);
console.log(filterRepositories);

console.log (" Last Five Update Repositories") ;
const lastUpdate = getLastFiveUpdatedRepositories(repositories);
console.log(lastUpdate);

const sumStars= sumOfAllRepositoryStars(repositories);
console.log("Sum of all Repositories stars: ", sumStars);
const topFive = getTopFiveRepositoriesByStars(repositories);
console.log("Top 5 Repositories by Stars" , topFive);

const sortedRepositories = listRepositoriesAlphabeticallyWithoutH(repositories);
console.log("Repositories with out a H " ,sortedRepositories);