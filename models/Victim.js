const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const victimSchema = new Schema({
    email: String
});

module.exports = mongoose.model("Victim", victimSchema);
