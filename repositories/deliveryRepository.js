'use strict'

const firebase = require('../db');
const Delivery = require('../models/delivery');
const firestore = firebase.firestore();

class deliveryRepository {
    constructor() {}

    async create(data) {
        let res = await firestore.collection('deliverys').doc().set(data);
        return res;
    }

    async update(id, data) {
        let delivery = await firestore.collection('deliverys').doc(id);
        let res = await delivery.update(data);
        return res;
    }

    async getAll() {
        let delivery = await firestore.collection('deliverys');
        let res = await delivery.get();
        const deliveryArray = [];
        res.forEach( doc => {
            const delivery = new Delivery(
                //doc.id,
                doc.data().address,
                doc.data().birthdate,
                doc.data().city,
                doc.data().cpf,
                doc.data().name,
                doc.data().state,
                doc.data().zipcode
            );
            deliveryArray.push(delivery);
        })
        return deliveryArray;
    }

    async getById(id) {
        let delivery = await firestore.collection('deliverys').doc(id);
        let res = await delivery.get();
        return res.data();
    }

    async delete(id) {
        return await firestore.collection('deliverys').doc(id).delete();
    }
}

module.exports = deliveryRepository;