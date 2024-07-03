const { default: mongoose } = require("mongoose");


//define the course schema
const sellerSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  });

//compile models from the shema
const Seller = mongoose.model("Seller", sellerSchema);
module.exports = Seller;