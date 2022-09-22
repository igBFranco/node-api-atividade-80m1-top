'use strict'

const firebase = require('../db');
const Plate = require('../models/plate');
const firestore = firebase.firestore();

class plateRepository {
    constructor() {}

    async create(data) {
        let res = await firestore.collection('plates').doc().set(data);
        return res;
    }

    async update(id, data) {
        let plate = await firestore.collection('plates').doc(id);
        let res = await plate.update(data);
        return res;
    }

    async getAll() {
        let plate = await firestore.collection('plates');
        let res = await plate.get();
        const plateArray = [];
        res.forEach(doc => {
            const plate = new Plate(
                doc.id,
                doc.data().description,
                doc.data().name,
                doc.data().price,
                doc.data().tag,
            );
            plateArray.push(plate);
        })
        return plateArray;
    }

    async getById(id) {
        let plate = await firestore.collection('plates').doc(id);
        let res = await plate.get();
        return res.data();
    }

    async delete(id) {
        return await firestore.collection('plates').doc(id).delete();
    }
}

module.exports = plateRepository;