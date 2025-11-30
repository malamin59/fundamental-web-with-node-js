const fs = require("fs");

const content1 = "This is content \n nodejs is awesome!!";

fs.writeFile("./output/test-async.txt", content1, (err) => {
    if(err) return console.log(err.message)
    console.log("File written successfully!");

    // Now writing second content (async)
    const content2 = "This is content2 \n async awesome!!"

    fs.appendFile("./output/test-async.txt", content2, (err) => {
        if(err) return console.log(err.message)
        console.log("Second content added successfully!");
    });
});