import mongoose from "mongoose";
// const connectdb = (DATABASE_URL) => {
//   return mongoose
//     .connect(DATABASE_URL)
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((err) => console.error("Could not connect to MongoDB:", err));
// };
// export { connectdb };

// ASYNC await

const connectdb = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Could not connect to MongoDB:", err);
  }
};
export { connectdb };
