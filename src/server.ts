import app from './app';
import config from './config';
import mongoose from 'mongoose';
const PORT = process.env.PORT || 5000;
async function main() {
  try {
    await mongoose.connect(config.databaseURL as string);
    console.log('Database connected successfully!!!');
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(`internal server down`, error);
  }
}

main();
