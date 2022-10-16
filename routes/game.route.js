import  express  from "express";
import { body } from "express-validator";
import multer from "multer";
import { getAll,addOnce,getOnce,putOnce,deleteOnce } from "../controllers/game.controller.js";


const router = express.Router();

router.route('/').get(getAll).post(
    multer,
    body('name').isLength({ min: 5}),
    body('year').isNumeric(),
    addOnce);

router.route('/:name').get(getOnce).put(putOnce).delete(deleteOnce);
export default router;