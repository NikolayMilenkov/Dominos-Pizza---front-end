var products = (function() {
    function Product(name, price, imgProd) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.ingredients = ingredients;
        this.imgProd = imgProd;
    }
    PizzaProduct.prototype = Object.create(Product.prototype);
    PizzaProduct.prototype.constructior = PizzaProduct;

    function PizzaProduct(name, price, imgProd, ingredients) {
        Product.call(this, name, price, imgProd);
        this.ingredients = ingredients;
    }

    PizzaProduct.prototype = Object.create(Product.prototype);
    PizzaProduct.prototype.constructior = PizzaProduct;

    function Sandwich(name, price, imgProd, ingredients) {
        Product.call(this, name, price, imgProd);
        this.ingredients = ingredients;
    }

    Sandwich.prototype = Object.create(Product.prototype);
    Sandwich.prototype.constructior = Sandwich;


    function Salad(name, price, imgProd, ingredients) {
        Product.call(this, name, price, imgProd);
        this.ingredients = ingredients;
    }
    Salad.prototype = Object.create(Product.prototype);
    Salad.prototype.constructior = Salad;

    function Pasta(name, price, imgProd, ingredients) {
        Product.call(this, name, price, imgProd);
        this.ingredients = ingredients;
    }
    Pasta.prototype = Object.create(Product.prototype);
    Pasta.prototype.constructior = Pasta;

    function Dessert(name, price, imgProd, ingredients) {
        Product.call(this, name, price, imgProd);
        this.ingredients = ingredients;
    }
    Dessert.prototype = Object.create(Product.prototype);
    Dessert.prototype.constructior = Dessert;

    function Beverage(name, price, imgProd) {
        Product.call(this, name, price, imgProd);
    }
    Beverage.prototype = Object.create(Product.prototype);
    Beverage.prototype.constructior = Beverage;

    function createProduct(type, name, price, imgProd, ingredients) {
        if (type === 'Pizza') {
            return new PizzaProduct(name, price, imgProd, ingredients);
        }
        if (type === 'Sandwich') {
            return new Sandwich(name, price, imgProd, ingredients);
        }
        if (type === 'Salad') {
            return new Salad(name, price, imgProd, ingredients);
        }
        if (type === 'Pasta') {
            return new Pasta(name, price, imgProd, ingredients);
        }
        if (type === 'Beverage') {
            return new Beverage(name, price, imgProd);
        }
        return new PizzaProduct(name, price, imgProd, ingredients);
    }


    var products = JSON.parse(window.localStorage.getItem('products')) || [];
    for (var index = 0; index < products.length; index++) {
        var product = products[index];
        var newProduct = createProduct(products[index].type);

        for (var key in product) {
            if (product.hasOwnProperty(key))
                newProduct[key] = product[key];
        }

        products[index] = newProduct;
    }


    return {
        deleteAllProducts: function() {
            products = [];
            window.localStorage.clear();
        },

        addProduct: function(type, name, price, imgProd, ingredients) {
            products.push(createProduct(ype, name, price, imgProd, ingredients));
            products.forEach(function(product) {
                if (product.type = product instanceof PizzaProduct)
                    product.type = "Pizza"
                if (product.type = product instanceof Pasta)
                    product.type = "Pasta"
                if (product.type = product instanceof Sandwich)
                    product.type = "Sandwich"
                if (product.type = product instanceof Salad)
                    product.type = "Salad"
                if (product.type = product instanceof Beverage)
                    product.type = "Beverage"
            });
            window.localStorage.setItem('products', JSON.stringify(products));
        },

        getProduct: function(index) {
            if (index >= 0 && index < products.length)
                return products[index];
        },

        count: function() {
            return products.length;
        }
    };
})();

function User(id, firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.cart = new Cart();

}



function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
User.prototype.validate = function() {
    if (this.firstName.length < 2 && this.lastName.length < 2) {

        console.log("cor");
        return false;
    }

    //var re = new RegExp('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
    if (!validateEmail(this.email)) {
        console.log(validateEmail(this.email));
        return false;
    }
    if (!(this.password.length > 3)) {

        return false;
    }
    return true;


}

function Cart() {
    this.products = [];


}
var productsMenuList = [];

function Product(productName, productType, price, ingredients, imgSrc) {
    this.productName = productName;
    this.productType = productType;
    this.price = price;
    this.ingredients = ingredients;
    this.imgSrc = imgSrc;
    productsMenuList.push(this);
}

Cart.prototype.addProduct = function(item) {
    this.products.push(item);
}
Cart.prototype.getProducts = function() {
    if (products.length > 0) {
        return this.products;
    }
    return false;
}


//var users = [new User("niki", "nikolas", "1234", 11)];
/*var users = JSON.parse(window.localStorage.getItem('users')) || [];
return {
    addUser: function(user) {
        if (user instanceof User) {
            users.push(user);
        }
        window.localStorage.setItem('users', JSON.stringify(users));
    },

    loginUser: function(email, password) {
        return users.some(function(u) {
            return (u.email === email) &&
                (u.password === password);
        });
    },

    isUserNameExists: function(username) {
        return users.some(function(u) {
            return (u.username === username);
        });
    },

    getUser: function(index) {
        if (index >= 0 && index < users.length)
            return users[index];
    },
    getNumberOfUser: function() {
        return users.length;
    },

    isPasswordValid: function(password) {
        return password.length > 3;
    }
}
})*/