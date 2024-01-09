import { Router } from "express";
import clickRouter from "../components/click/routes/click.routes";
import conversionesRouter from "../components/conversiones/routes/conversiones.routes";

const router = Router();

// Ruta click
router.use("/api/click", clickRouter);
// Ruta conversiones
router.use("/api/conversiones", conversionesRouter);

export default router;