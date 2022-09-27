'use strict'

require('../models/delivery');
const repository = require('../repositories/deliveryRepository');

function deliveryController () {

}

deliveryController.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
}

deliveryController.prototype.put = async (req,res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
}

deliveryController.prototype.get = async (req,res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
}

deliveryController.prototype.getById = async (req,res) => {
    let delivery = await new repository().getById(req.params.id);
    res.status(200).send(delivery);
}

deliveryController.prototype.delete = async (req,res) => {
    let delivery = await new repository().delete(req.params.id);
    res.status(200).send(delivery);
}

module.exports = deliveryController;