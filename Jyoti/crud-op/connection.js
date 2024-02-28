const mongoose = require('mongoose');
function connection(url) {
    mongoose.connect(url)
        .then(() => console.log(`database connected 😂`))
        .catch(() => console.log("database not connected"))
}

module.exports = connection;