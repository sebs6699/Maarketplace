import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './server/routes/routes.js'; 

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB error:'));
db.once('open', function () {
  console.log('Connected to database');
});

app.use(productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
