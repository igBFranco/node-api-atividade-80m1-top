class User {
    constructor(id, address, birthdate, city, cpf, name, state, zipcode) {
        this.id = id,
        this.address = address,
        this.birthdate = birthdate,
        this.city = city,
        this.cpf = cpf,
        this.name = name,
        this.state = state,
        this.zipcode = zipcode
    }
}

module.exports = User;