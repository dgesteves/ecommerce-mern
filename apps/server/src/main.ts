import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './routes/user';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/user', userRouter);

mongoose.connect(process.env.MONGODB_URI).catch((err) => {
  console.error(err);
  process.exit(1);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
