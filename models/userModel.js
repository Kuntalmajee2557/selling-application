import mongoose from 'mongoose';


//define the course schema
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    courses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    }]
  });

//compile models from the shema
const User = mongoose.model("User", userSchema);
export default User;
