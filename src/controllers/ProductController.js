const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    // para pegar parametros do GET
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });

    return res.json(products);
  },

  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async update(req, res) {
    // new serve pra retornar o valor já atualizado, apó o update
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(product);
  },

  async remove(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    return res.send();
  }
};
