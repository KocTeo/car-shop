import mongoose from 'mongoose';

const connectToDatabase = (mongoURL: string) => {
  mongoose.connect(mongoURL);

  console.log('Função connectToDatabase');
};

export default connectToDatabase;
