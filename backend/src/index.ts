import express from 'express';
import cors from 'cors'; 
import bodyParser from 'body-parser';
import userRoutes from './routes/user.routes';
import researchRoutes from './routes/research.routes';
import { sequelize } from './models';

const app = express();
const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/research', researchRoutes);

sequelize.sync().then(() => {
  console.log('Database connected');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
