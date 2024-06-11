import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_EURL
if (!MONGODB_URI) {
  throw new Error("Please define the environment variable MONGODB_URI");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectToDB = async () => {
  try {
    // Options for the MongoDB connection
    const options = {
      // Add any other options as needed
    };

    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, options);

    // Connection successful
    console.log('Connected to MongoDB');

    // Return the Mongoose connection object
    return mongoose.connection;
  } catch (error) {
    // Connection failed
    console.error('Error connecting to MongoDB:', error);
    throw error; // Rethrow the error for handling in the caller
  }
};

export default connectToDB;
