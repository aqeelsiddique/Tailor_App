const measurements = require("../model/mesaurements");

exports.createProduct = async (req, res) => {
    const { name, description } = req.body;
    console.log(req.file);
    
    if (!name || !description || !req.file) {
      return res.status(422).json({ error: "Please fill in all the required fields" });
    }
    
    try {
      const user = new measurements({
        name,
        description,
        image: req.file.filename,
      });
    
      await user.save();
    
      res.status(201).json({ message: "Successfully created product", user });
      console.log("user", user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
    
};
exports.getProducts = async (req, res) => {
    try {
      // Fetch the list of products
      const productList = await measurements.find({}, { _id: 0, __v: 0 });
  
      res.status(200).json({ productList });
      console.log("Product List:", productList);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

exports.updateproduct = (req, res) => {
    let readquery = req.params.id; 
    measurements.updateOne(
      { _id: readquery }, 
      {
        $set: {
          name: req.body.name,
          description: req.body.description,
          image: req.file.filename,
        },
      }
    )
      .then((result) => {
        console.log(result);
  
        if (result.nModified > 0) {
          res.status(200).json({ message: "Product updated successfully" });
        } else {
          res.status(404).json({ error: "Product updated successfully" });
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  };



  exports.productdelete = (req, res) => {
    measurements.findByIdAndDelete(req.params.id, (err, doc) => {
      if (!err) {
        res.status(200).json({ message: "Product delete successfully" });
    } else {
        console.log("Error while deleting", err);
      }
    });
  };
  
