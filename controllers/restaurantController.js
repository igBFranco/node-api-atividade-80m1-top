'use strict'

require('../models/restaurant');
const repository = require('../repositories/restaurantRepository');

function restaurantController () {

}

restaurantController.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
}

restaurantController.prototype.put = async (req,res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
}

restaurantController.prototype.get = async (req,res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
}

restaurantController.prototype.getById = async (req,res) => {
    let restaurant = await new repository().getById(req.params.id);
    res.status(200).send(restaurant);
}

restaurantController.prototype.delete = async (req,res) => {
    let restaurant = await new repository().delete(req.params.id);
    res.status(200).send(restaurant);
}

module.exports = restaurantController;