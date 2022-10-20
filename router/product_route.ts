import express from "express";
import {
  deleteInventory,
  fetchInventory,
  saveInventory,
  updateInventory,
} from "../controller/inventory_controller";
const router = express.Router();

router.post("/addProduct", saveInventory);
router.post("/updateProduct", updateInventory);
router.delete("/deleteProduct", deleteInventory);
router.get("/fetchProduct", fetchInventory);

export default router;
