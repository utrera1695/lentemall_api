import app from '../app';
import {
  createServer
} from 'http';

var server = createServer(app);

import {
  connect,
} from 'mongoose';


const PORT = process.env.PORT || 8000;
connect(
  'mongodb+srv://admin:admin@cluster0.ezm7w.mongodb.net/lentemalldb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      server.listen(PORT);
      console.log('Base de datos conectada!');
      console.log('Servidor escuchando por el puerto ' + PORT)
    }
  }
);