const fs = require("fs")
fs.writeFile("./output/temp.txt" , "this is a new file", (error) =>{
    if(error) {
        console.log(error.message)
    } 
    console.log("file created")
});
if(fs.existsSync("./output/temp.txt")){
    console.log("file exits")
fs.unlinkSync('./output/temp.txt')

console.log("temp file deleted")
}

try{ 
fs.lutimesSync('./output/temp.txt' , (error) =>{
    if(error) {
        console.log(error.message)
    }
    console.log("file created")
})
}
catch(error) {
    console.log(error.message)
}

fs.writeFile("./output/temp2.txt", "Author temp file" , (error) =>{
    if(error) return console.log(error.message);
    console.log("Another temp file created");
fs.unlink('./output/temp2.txt', (error) =>{
    if(error) {
console.log(error.message)
    }
    else{
        console.log("Temp 2 delete")
    }
})

})