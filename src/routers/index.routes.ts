import { Router } from "express";
import clickRouter from "../components/click/routes/click.routes";
import tokenRouter from "../shared/middlewares/tokenMiddleware/routes/configToken.routes";

const router = Router();

// Ruta click
router.use("/api/click", clickRouter);
// Ruta token
router.use("/api/token", tokenRouter);

export default router;