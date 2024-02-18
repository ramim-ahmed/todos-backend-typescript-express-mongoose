import express, { Application } from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
const app: Application = express();
import applicationRoutes from './routes';
// middleares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// applicationt routes
app.get('/', (req, res) => {
  res.status(httpStatus.OK).json({
    message: 'Server running on port: 5000',
  });
});

app.use('/api/v1', applicationRoutes);
// handle not found routes
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'not found !!',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'api not found!!',
      },
    ],
  });
  next();
});
export default app;
