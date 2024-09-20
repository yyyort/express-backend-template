import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';


/* config */
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(cors());
app.use(morgan('common'));


/* routes */
app.get('/', (req, res) => {
  res.send('Hello World!');
});

/* server */
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});