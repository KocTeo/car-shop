import mongoose from 'mongoose';
import 'dotenv/config';

const mongoDatabaseURI: string = process.env.MONGO_URI

const connectToDatabase = () => {
  mongoose.connect(mongoDatabaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default connectToDatabase;
