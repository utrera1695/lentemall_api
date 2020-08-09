import app from '../app';
import {
  createServer
} from 'http';

var server = createServer(app);

import {
  connect
} from 'mongoose';

import autoIncrement from 'mongoose-auto-increment';

const PORT = process.env.PORT || 8000;
connect(
  'mongodb://lentemall:lentemall2020@ds047355.mlab.com:47355/heroku_9n4w0c7s', {
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
      autoIncrement.initialize(res)
    }
  }
);