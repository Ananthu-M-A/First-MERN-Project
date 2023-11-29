import express from 'express';
const router = express.Router();
import { registerAdmin, authAdmin, logoutAdmin, getAdminProfile } from '../controllers/adminController.js';

router.post('/adminSignup', registerAdmin);
router.post('/adminLogin', authAdmin);
router.post('/adminLogout', logoutAdmin);
router.get('/adminHome', getAdminProfile);

export default router;