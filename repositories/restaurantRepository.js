'use strict'

const firebase = require('../db');
const Restaurant = require('../models/restaurant');
const firestore = firebase.firestore();

class restaurantRepository {
    constructor() {}

    async create(data) {
        let res = await firestore.collection('restaurants').doc().set(data);
        return res;
    }

    async update(id, data) {
        let restaurant = await firestore.collection('restaurants').doc(id);
        let res = await restaurant.update(data);
        return res;
    }

    async getAll() {
        let restaurant = await firestore.collection('restaurants');
        let res = await restaurant.get();
        const restaurantArray = [];
        res.forEach( doc => {
            const restaurant = new Restaurant(
                doc.id,
                doc.data().address,
                doc.data().city,
                doc.data().description,
                doc.data().name,
                doc.data().state,
                doc.data().tag,
                doc.data().zipcode,
            );
            restaurantArray.push(restaurant);
        })
        return restaurantArray;
    }

    async getById(id) {
        let restaurant = await firestore.collection('restaurants').doc(id);
        let res = await restaurant.get();
        return res.data();
    }

    async delete(id) {
        return await firestore.collection('restaurants').doc(id).delete();
    }
}

module.exports = restaurantRepository;