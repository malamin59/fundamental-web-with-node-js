const args = process.argv

// process.ares[0] = node path
// process.args[1] = file path
// process.args[2] = first actual argument 

const name = args[2] || "gust";
const time = new Date().getHours();

let greeting;

if(time < 12) {
    greeting = "good morning"
}

else if(time < 18) {
    greeting = "good Afternoon"
}
else{
        greeting = "Good Evening"
}

console.log(`${greeting} ${name}`);
