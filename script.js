const { log } = require("console");
const fs = require("fs");
const path = require('node:path');
const os = require('node:os');
const os = require('os');

/* -------------------------------------------------------------------------- */
/*                               make directory                               */
/* -------------------------------------------------------------------------- */

// fs.mkdirSync("index");

// path.basename('');
// Returns: 'myfile.html'


/* -------------------------------------------------------------------------- */
/*                      add file in dir and write in file                     */
/* -------------------------------------------------------------------------- */

// fs.writeFileSync("index.txt","ye ek file hai ");

// fs.writeFileSync("index/index.txt","ye ek file hai "); // ADD IN DIFF FOLDER



/* -------------------------------------------------------------------------- */
/*                                 UPDATE file                                */
/* -------------------------------------------------------------------------- */

// fs.appendFileSync("index.txt","new txt add ho gya")


/* -------------------------------------------------------------------------- */
/*                                READING File                                */
/* -------------------------------------------------------------------------- */


// const data = fs.readFileSync("Rename.txt","utf-8");

// log(data)
// console.log(data);


/* -------------------------------------------------------------------------- */
/*                          Async reading file                                */
/* -------------------------------------------------------------------------- */

// fs.readFile('file.txt','utf8', (err, data) => {
//     log(err, data);
// })
// const a = fs.readFileSync('file.txt')
// log(a.toString())


/* -------------------------------------------------------------------------- */
/*                           RENAME file and folder                           */
/* -------------------------------------------------------------------------- */


// fs.renameSync("index.txt","Rename.txt"); // rename file 

// fs.renameSync("index","data"); //renamefolder


/* -------------------------------------------------------------------------- */
/*                           DELETE file and folder                           */
/* -------------------------------------------------------------------------- */

// fs.unlinkSync("index/index.txt"); // delete file

// fs.rmdirSync("index/index.txt"); // Delete folder



// const a= path.join(os.homedir(),"desktop","qwer");
// fs.mkdirSync(a)
// log("created");
