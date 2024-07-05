import mongoose from 'mongoose';



//define the course schema
const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default : 'demo.jpg'
    },
    prize: {
        type: Number,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true,
        immutable: true
    }
})


//compile models from the shema
const Course = mongoose.model("Course", courseSchema);

export default Course;