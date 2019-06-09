const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    profileId: String,
    userName: String
});

mongoose.model("users", userSchema);
