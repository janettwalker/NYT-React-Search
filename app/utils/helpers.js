// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var newsAPI = "3156dfa8f141243bd9f183c00f129f092";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(title) {

    console.log(title);

    // Figure out the geolocation
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + title + "&q=";
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      if (response.data.results[0]) {
        return response.data.results[0].formatted;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getNews: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postNews: function(location) {
    return axios.post("/api", { title: title });
  }
};

// We export the API helper
module.exports = helper;
