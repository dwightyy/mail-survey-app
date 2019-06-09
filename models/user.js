const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    profileId: String,
    name: String
});

mongoose.model("users", userSchema);
