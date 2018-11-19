import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as cors from 'cors';
import { bootDiContainer } from './core/DependencyContainers';

import './controllers';
import bodyParser = require('body-parser');

import { eviromentDev } from './enviroments';

const server = new InversifyExpressServer(bootDiContainer);

import passport = require('passport');
import session = require('express-session');
import { morganLogs } from './utils';
const RedisStore = require('connect-redis')(session);
// const LocalStrategy = require('passport-local').Strategy;



// create server
server.setConfig(app => {
  // add body parser
  app.use(cors());
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());
  app.use(morganLogs());

  app.use(
    session({
      store: new RedisStore({
        url: 'redis://localhost:6379'
      }),
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false
    })
  );
  app.use(passport.initialize())
app.use(passport.session())
});





const app = server.build();
app.listen(eviromentDev.serverPort, () => {
  console.log(`listening on port ${eviromentDev.serverPort}!`);
});
