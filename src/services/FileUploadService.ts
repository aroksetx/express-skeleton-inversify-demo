import * as multer from 'multer'
import { injectable, inject } from 'inversify';
import { DI_TYPES } from '../core/DependencyTypes';

@injectable()
export class FileUploadService {
    private upload;
    private UPLOAD_PATH = 'uploads';

    constructor(
    ){
       this.upload = multer({ dest: `${this.UPLOAD_PATH}/` });
    }

    getIntance(){
        return this.upload;
    }

}



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