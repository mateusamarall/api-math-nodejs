import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT ||3333; //CASO for para frente criar arquivo .dontenv e clc a porta

app.listen(port);
