class Order {
    constructor(id, plates, user, price, delivery){
        this.id = id,
        this.plates = plates,
        this.user = user,
        this.price = price,
        this.delivery = delivery
    }
}

module.exports = Order;