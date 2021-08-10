class ShoppingCart{
    products = [];
    constructor(user_id){
        this.user_id = user_id;
    }
    addProduct(product){
        this.products.push(product);
    }
    getProductById(id){
        return this.products.find(pr=>pr.id === id);
    }
    getAllProducts(){
        return this.products;
    }
}

module.exports = ShoppingCart;