import mongoose from "mongoose";
// Defining a schema
const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 18, max: 40 },
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

// console.log(StudentSchema.path("age")); //tells detail of schema entity
// Creating a model based on the schema
const studentModel = mongoose.model("student", StudentSchema);

// DELETE DOCUMENT

export const deleteDocById = async (id) => {
  try {
    const res = await studentModel.findByIdAndDelete(id); //method 1
    // const res = await studentModel.deleteOne({ _id: id }); //method 2
    // const res = await studentModel.deleteMany({ _id: id }); //method 3

    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
