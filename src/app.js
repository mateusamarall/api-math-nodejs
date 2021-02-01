import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mathRoutes from './routes/mathRoutes';

class App{
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(cors());//sem opções de acesso
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

  }
  routes() {
    this.app.use('/', mathRoutes);
  }
}

export default new App().app;
