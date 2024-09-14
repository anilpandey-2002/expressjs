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

// method 1 for hardcore data
// export const createDoc = async () => {
//   try {
//     // CREATE A new DOCUMENT
//     const studentDoc = new studentModel({
//       name: "anil pandey",
//       age: 25,
//       fees: 6000.0,
//       hobbies: true,
//       isactive: true,
//       Comments: [
//         {
//           value: "Excellent student",
//           publish: "2024-09-12T00:00:00Z",
//         },
//       ],
//     });

//     // saving document
//     const result = await studentDoc.save();
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   }
// };

// method 2
export const createDoc = async (
  name,
  age,
  fees,
  hobbies,
  isactive,
  Comments
) => {
  try {
    // CREATE A new DOCUMENT
    const studentDoc = new studentModel({
      name,
      age,
      fees,
      hobbies,
      isactive,
      Comments,
    });

    // saving document
    const result = await studentDoc.save();
    // for multiple at a time
    // const result = await studentModel.insertMany([  studentDoc,  anilDoc,kamalDoc,ramDoc]);

    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
