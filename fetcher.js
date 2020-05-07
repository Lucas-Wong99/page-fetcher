const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

request(args[0], (error, data) => {
  fs.writeFile(args[1], data, () => {
    if (error) {
      throw err;
    }
    console.log(`Downloaded and saved ${data.headers['content-length']} bytes to ${args[1]}`
    );
  });
});

