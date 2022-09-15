import mongoose from 'mongoose';
import 'dotenv/config';

const mongoDatabaseURI = process.env.MONGO_URI

const connectToDatabase = () => {
  mongoose.connect(mongoDatabaseURI: string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default connectToDatabase;
