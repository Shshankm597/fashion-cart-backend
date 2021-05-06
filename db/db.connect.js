const mongoose = require("mongoose")

// moved to .env/sec
const dbURI = process.env['dbURI']

async function initializeDBConnection() {
  try {
    await mongoose.connect(dbURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // suppressing 'collection.ensureIndex is deprecated' warning
    useCreateIndex: true
    })
    console.log("successfully connected to DB")
  }
  catch(error) { 
    console.error("mongoose connection failed...", error)
  }
}

module.exports = { initializeDBConnection }