
import Product from './models/product';

export const getAllProducts = (req, res) => {
  Product.find((err, products) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(products);
    }
  });
};

export const getProductById = (req, res) => {
  const productId = req.params.id;
  Product.findById(productId, (err, product) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(product);
    }
  });
};

export const addNewProduct = (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send('A new product has been added.');
    }
  });
};

export const updateProductById = (req, res) => {
  const productId = req.params.id;
  const updatedData = req.body;
  Product.findByIdAndUpdate(productId, updatedData, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('A  product has been updated.');
    }
  });
};

export const removeProductById = (req, res) => {
  const productId = req.params.id;
  Product.findByIdAndRemove(productId, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('A product has been removed.');
    }
  });
};

export const removeAllProducts = (req, res) => {
  Product.deleteMany({}, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('All products have removed .');
    }
  });
};

export const findProductsByName = (req, res) => {
  const nameKeyword = req.query.name;
  Product.find({ name: { $regex: nameKeyword, $options: 'i' } }, (err, products) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(products);
    }
  });
};


