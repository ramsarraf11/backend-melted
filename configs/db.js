const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb+srv://ramk:sarraf@cluster0.eyahlfp.mongodb.net/companydata?retryWrites=true&w=majority");
module.exports={connection}