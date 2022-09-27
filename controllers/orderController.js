'use strict'

require('../models/order');
const repository = require('../repositories/orderRepository');

function orderController () {

}

orderController.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
}

orderController.prototype.put = async (req,res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
}

orderController.prototype.get = async (req,res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
}

orderController.prototype.getById = async (req,res) => {
    let order = await new repository().getById(req.params.id);
    res.status(200).send(order);
}

orderController.prototype.delete = async (req,res) => {
    let order = await new repository().delete(req.params.id);
    res.status(200).send(order);
}

module.exports = orderController;