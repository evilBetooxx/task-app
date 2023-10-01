import { Router} from "express";
import { login, registrer, logout, profile } from "../controllers/auth.controller.js";

const router = Router();

router.post("/registrer", registrer);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", profile)

export default router;
