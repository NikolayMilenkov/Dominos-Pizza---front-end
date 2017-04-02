function User(name, age, pass) {
    this.name = name;
    this.age = age;
    this.pass = pass;
}

var userManager = (function() {
    var users = [new User("Pani", 23, "1234")];
    return {
        addUser: function(user) {
            if (user instanceof User) {
                users.push(user);
            }
        },
        loginUser: function(name, password) {
            return users.some(function(u) {
                return (u.name === name) &&
                    (u.pass === password);
            });
        },

    }
})();