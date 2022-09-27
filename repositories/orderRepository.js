'use strict'

const firebase = require('../db');
const Order = require('../models/order');
const firestore = firebase.firestore();

class orderRepository {
    constructor() {}

    async create(data) {
        let res = await firestore.collection('orders').doc().set(data);
        return res;
    }

    async update(id, data) {
        let order = await firestore.collection('orders').doc(id);
        let res = await order.update(data);
        return res;
    }

    async getAll() {
        let order = await firestore.collection('orders');
        let res = await order.get();
        const orderArray = [];
        res.forEach( doc => {
            const order = new Order(
                //doc.id,
                doc.data().plates,
                doc.data().user,
                doc.data().price,
                doc.data().delivery,
            );
            orderArray.push(order);
        })
        return orderArray;
    }

    async getById(id) {
        let order = await firestore.collection('orders').doc(id);
        let res = await order.get();
        return res.data();
    }

    async delete(id) {
        return await firestore.collection('orders').doc(id).delete();
    }
}

module.exports = orderRepository;