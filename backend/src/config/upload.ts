import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const nameImage = file.originalname.replace(/\s/g, '');
            const fileName = `${Date.now()}-${nameImage}`;

            cb(null, fileName);
        },
    })
}