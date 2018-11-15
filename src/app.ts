import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import * as cors from 'cors';
import { bootDiContainer } from "./core/DependencyContainers";

import './controllers'
import bodyParser = require("body-parser");

const server = new InversifyExpressServer(bootDiContainer);


// setup
// const DB_NAME = 'db.json';
// const COLLECTION_NAME = 'images';
// const UPLOAD_PATH = 'uploads';
// const upload = multer({ dest: `${UPLOAD_PATH}/` }); // multer configuration
// const db = new Loki(`${UPLOAD_PATH}/${DB_NAME}`, { persistenceMethod: 'fs' });




// app.post('/profile', upload.single('avatar'), async (req, res) => {
//     try {
//         console.log(req.file)
//         const col = await loadCollection(COLLECTION_NAME, db);
//         const data = col.insert(req.file);

//         db.saveDatabase();
//         res.send({ id: data.$loki, fileName: data.filename, originalName: data.originalname });
//     } catch (err) {
//         res.sendStatus(400);
//     }
// })


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
app.listen(3000, () => {
    console.log('listening on port 3000!');
});
