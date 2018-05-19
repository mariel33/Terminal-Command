const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });

};

module.exports.touch = () => {
    const fileContent = '';
    fs.touch('./', fileContent, (err) => {
        if (err) {
            console.log(err);
        }
        console.log(`${fileContent} created`);
    })
  };

  module.exports.mkdir = () => {
    fs.mkdir('./', (err) => {
        if (err) {
            console.log(err);
        }
        console.log(`directory created`);
    });
  };