import mongoose from "mongoose";
// Defining a schema
const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  age: { type: Number, required: true, unique: true, min: 18, max: 40 },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => {
      v >= 5500.5;
    },
  },
  hobbies: { type: Boolean },
  Comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

console.log(StudentSchema.path("age"));
// Creating a model based on the schema
const studentModel = mongoose.model("student", StudentSchema);
