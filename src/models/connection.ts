import mongoose from 'mongoose';
import 'dotenv/config';

const mongoDatabaseURI = process.env.MONGO_URI

function connectToDatabase() {
  mongoose.connect(mongoDatabaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection();
  db.on('error', (error) => console.error(error));
  db.once('open', () => console.log('Banco rodando'))
}

export default connectToDatabase;
