import express from 'express';
import ImageService from './images.service';
import multer from 'multer';
var router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, file.originalname);
    }
});
const upload = multer({
    storage
});
router.post(
    '/file/upload',
    upload.single('file'),
    /* Guardar imagen en base de datos */
    async (req, res, next) => {
        try {
            let folder = req.query.folder
            let image = await ImageService.Save(req.file, folder);
            res.status(200).send(image);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }
);

router.get(
    '/image/:id',
    /* Buscar la imagen en base de datos */
    async (req, res) => {
        try {
            /*  */
            res.status(200).send(image);
        } catch (error) {
            res.status(500).send(error);
        }
    }
);

export default router;