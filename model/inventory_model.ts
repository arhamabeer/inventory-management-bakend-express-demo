import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    _id: { type: String },
    name: { type: String, required: true },
    company: { type: String, required: true },
    type: { type: String, required: true },
    quantity: { type: Number, required: true },
    defected: { type: Number, required: true },
    description: { type: String, required: true },
    sold: { type: Number, required: true },
    sellPrice: { type: Number, required: true },
    purchasePrice: { type: Number, required: true },
    QRcode: [
      {
        str: { type: String, required: true },
        num: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

const ProductModel = model("inventory-products", ProductSchema);

export default ProductModel;
