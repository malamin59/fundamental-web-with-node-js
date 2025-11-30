require('dotenv').config();

const config = {
    app: {
        name: process.env.App_Name   || "default Name",
        version: process.env.App_version || "1.0.0",    
        port: process.env.PORT || "1.0.0",
        env: process.env.NODE_ENV || "1.0.0",
    }
}

console.log(config.app)
module.exports = config;