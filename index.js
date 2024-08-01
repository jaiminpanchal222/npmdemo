console.log("this is my first npm package");

let chalk = require('chalk');
console.log(
  chalk.green("Successful ") +
    chalk.red.underline.bold("ERROR ") +
    chalk.green("Done")
);
