import ProductModel from "../model/inventory_model";

//SAVE
const saveInventory = async (req: any, res: any) => {
  try {
    let check = await ProductModel.findOne({ _id: req.body._id });
    if (!check) {
      let data = new ProductModel({ ...req.body });
      const response = await data.save();
      res.status(200).send({ msg: "New Product Added!", ...response });
    } else {
      res
        .status(409)
        .send({ msg: "Product with same ID already exists", data: check });
    }
  } catch (e) {
    res.status(500).send({ msg: "Internal Server Error", error: e });
  }
};

//UPDATE
const updateInventory = async (req: any, res: any) => {
  //   try {
  //     let check = await ProductModel.findOne({ _id: req.body._id });
  //     if (check) {
  //       let response = await ProductModel.findByIdAndUpdate(
  //         { _id: req.body._id },
  //         { ...req.body },
  //         { new: true }
  //       );
  //       res.status(200).send({ msg: "Product updated!", ...response });
  //     } else {
  //       res.status(404).send({ msg: "Product not found", data: check });
  //     }
  //   } catch (e) {
  //     res.status(500).send({ msg: "Internal Server Error", error: e });
  //   }
};

//DELETE
const deleteInventory = async (req: any, res: any) => {
  //   try {
  //     let check = await ProductModel.findOne({ _id: req.body._id });
  //     if (check) {
  //       let response = await ProductModel.findByIdAndDelete({
  //         _id: req.body._id,
  //       });
  //       res.status(200).send({ msg: "Product deleted!", ...response });
  //     } else {
  //       res.status(404).send({ msg: "Product not found", data: check });
  //     }
  //   } catch (e) {
  //     res.status(500).send({ msg: "Internal Server Error", error: e });
  //   }
};
//FETCH
const fetchInventory = async (req: any, res: any) => {
  //   try {
  //     let check = await ProductModel.findOne({ _id: req.body._id });
  //     if (check) {
  //       res.status(200).send({ msg: "Product fetched!", check });
  //     } else {
  //       res.status(404).send({ msg: "Product not found", data: check });
  //     }
  //   } catch (e) {
  //     res.status(500).send({ msg: "Internal Server Error", error: e });
  //   }
};

export { saveInventory, updateInventory, deleteInventory, fetchInventory };
