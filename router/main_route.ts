import express from "express";
import addInventory from "./product_route";
const router = express.Router();

router.use("/", addInventory);

export default router;
