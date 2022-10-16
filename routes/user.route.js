import { Express } from "express";
import { addOnce,getOnce,putOnce } from "../controllers/user.controller";


const router = Express.Router();
router.route('/').post(addOnce);
router.route('/:username').get(getOnce).put(putOnce);
export default router;