import { Router } from "express";
import clickRouter from "../components/click/routes/click.routes";
import conversionesRouter from "../components/conversiones/routes/conversiones.routes";
import configRouter from "../components/tokenConfig/routes/tokenConfig.routes";
import campaignRouter from "../components/campaign/routes/campaign.routes";

const router = Router();

// Ruta click
router.use("/api/click", clickRouter);
// Ruta conversiones
router.use("/api/conversiones", conversionesRouter);
// Ruta config
router.use("/api/config", configRouter);
// Ruta campaign
router.use("/api/campaign", campaignRouter);

export default router;