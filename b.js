// Marks 20%

// The ./libs directory contains a random amount of directories and files.
// write a function to count the number of directories and files and 
// returns a promise that resolves to an object with keys `files` for number of files and `directories` for number of directories.

// documentation for fs https://nodejs.org/dist/latest-v14.x/docs/api/fs.html
const fs = require('fs');  
const path = require('path');

function count() {
  return new Promise((resolve, reject) => {
    fs.readdir('./books', (err, files) => {
      if (err) {
          reject(err)
          return; 
        }
      
      let fileCounter = 0; 
      let dirCounter = 0;  

      files.forEach((file) => {
        const FilePath = path.join('./books', file);
          
          fs.stat(FilePath, (err, stats) => {
            if (err) {
              reject(err);
              return; 
            }
            
            if (stats.isFile()) {
              fileCounter ++; 
            }  else if (stats.isDirectory()) {
              dirCounter ++; 
            } 

            if (fileCounter + dirCounter == files.length) {
              resolve({files: fileCounter, directories: dirCounter}); 
            }
        });
      });
    });
  });
};

module.exports = count;
