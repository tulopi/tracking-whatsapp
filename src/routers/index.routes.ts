import { Router } from "express";
import clickRouter from "../components/click/routes/click.routes";

const router = Router();

// Ruta click
router.use("/api/click", clickRouter)

export default router;