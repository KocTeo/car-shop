import mongoose from 'mongoose';

const connectToDatabase = (mongoURL: string) => {
  mongoose.connect(mongoURL);

  const db = mongoose.connection;
  db.once('open', () => console.log('Conectado ao banco'));
};

export default connectToDatabase;
