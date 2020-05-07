const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

request(args[0], (error, response, data) => {
  fs.writeFile(args[1], data, () => {
    fs.stat(args[1], (error, stats) => {
      if (error) {
        console.log("Hi guys, sorry you've chosen the incorrect file path");
      }
    });
    if (response.statusCode !== 200) {
      throw error;
    }
    if (error) {
      throw error;
    }
    console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${args[1]}`);
  });
});

