import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import * as cors from 'cors';
import { bootDiContainer } from "./core/DependencyContainers";

import './controllers'
import bodyParser = require("body-parser");
import { eviromentDev } from "./enviroments";

const server = new InversifyExpressServer(bootDiContainer);

// create server
server.setConfig((app) => {
  // add body parser
  app.use(cors());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

const app = server.build();
app.listen(eviromentDev.serverPort, () => {
    console.log(`listening on port ${eviromentDev.serverPort}!`);
});
