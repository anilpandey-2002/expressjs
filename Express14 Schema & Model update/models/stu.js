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

// UPDATE DOCUMENT

// export const updateDocById = async (id) => {
//   try {
//     const res = await studentModel.findByIdAndUpdate(
//       id,
//       { name: "raja" },
//       { returnDocument: "after" }
//     );
//     console.log(res);
//   } catch (e) {
//     console.log(e);
//   }
// };

// UPDATE ONE Documentexport const updateDocById = async (id) => {
export const updateDocById = async (id) => {
  try {
    const res = await studentModel.updateOne(
      { _id: id },
      { name: "rani ka raja" },
      { upsert: true }, //if data not found it will create new and addd
      { returnDocument: "after" }
    );
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
