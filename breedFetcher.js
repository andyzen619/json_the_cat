const json = require('JSON');
const request = require('request');
const baseUrl = "https://api.thecatapi.com/v1/images/search?breed_ids=";
const breed = process.argv[2];
let userSearch;
let searchUrl;

/**
 * Converts user search to a cats API appropriate search ID.
 * @param {*} string
 */
const convertToSearchId = function(string) {
  return string.substring(0, 4);
};

userSearch = convertToSearchId(breed);
searchUrl = baseUrl + userSearch;

console.log(searchUrl);

//search for beng cats
request.get(baseUrl + userSearch, (error, req, body) => {
  let results = json.parse(body);
  if (results.length === 0) {
    console.log("Invalid search, breed does not exist");
  } else {
    let siberianObject = results[0];

    console.log(`Description for siberian breed: ${siberianObject.breeds[0].description}`);
  }
});