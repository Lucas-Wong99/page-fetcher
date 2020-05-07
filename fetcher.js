const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

request(args[0], (error, response, data) => {
  fs.writeFile(args[1], data, () => {
    if (response.statusCode !== 200) {
      throw err;
    }
    if (error) {
      throw err;
    }
    console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${args[1]}`);
  });
});

