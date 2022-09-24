'use strict'

require('../models/plate');
const repository = require('../repositories/plateRepository');

function plateController () {

}

plateController.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
}

plateController.prototype.put = async (req,res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
}

plateController.prototype.get = async (req,res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
}

plateController.prototype.getById = async (req,res) => {
    let plate = await new repository().getById(req.params.id);
    res.status(200).send(plate);
}

plateController.prototype.delete = async (req,res) => {
    let plate = await new repository().delete(req.params.id);
    res.status(200).send(plate);
}

module.exports = plateController;