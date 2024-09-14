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

// // reterive all document
// const getallDoc = async () => {
//   const result = await studentModel.find();
//   console.log(result);
//   result.forEach((item) => {
//     console.log(
//       item.name,
//       item.age,
//       item.fees.toString(),
//       item.Comments[0].value
//     );
//     console.log();
//   });
// };

// // reterive all document specifi filed

const getspecificDoc = async () => {
  // const result = await studentModel.find().select("name age "); //include
  // const result = await studentModel.find().select({ name: 1, age: 1 }); //include

  // const result = await studentModel.find().select(["name", "age"]);
  // const result = await studentModel.find().select(["-name", "-age"]); //exclude
  // const result = await studentModel.find().select({ name: 0, age: 0 }); //exclude
  // const result = await studentModel.find(
  //   {},
  //   { name: 1, age: 1 },
  //   { limit: 5 },
  //   { skip: 1 }
  // );
  // const result = await studentModel.find({ age: { $gt: 20 } }); //greater than
  const result = await studentModel.find({
    $or: [
      { age: { $gt: 20 } }, // Greater than 20
      { fees: 5500 }, // Matches documents where fees equal 5500
    ],
  });

  console.log(result);

  console.log(result);
};

export { getspecificDoc };
