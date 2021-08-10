const Product = require('./product');

module.exports = class Store {
    static products = [
        new Product(1, "Banana", "Fruit 1", 25),
        new Product(2, "Apple", "Fruit 2", 10),
        new Product(3, "Orange", "Fruit 3", 15)];

    constructor(name) {
        this.name = name;
    }

    static getAllProducts() {
        return Store.products;
    }

    static getProductById(id) {
        return Store.products.find(p => p.id == id);
    }
}