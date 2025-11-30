const  fs = require("fs");

fs.writeFileSync('./output/test-async.txt', "Application \n");
console.log("file content");

const logEntry = `\n ${new Date().toISOString()} user logged \n`
fs.appendFile("./output/test-async.txt", logEntry,  (error) =>{
    if(error) {
        return console.log(error.message)
        }
        console.log("data send")
})

const logEntry2 = `${new Date().toISOString()} data fetch`

fs.appendFileSync('./output/app.txt', logEntry2)