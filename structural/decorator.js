var User = function(name) {
    this.name = name;
 
    this.say = function() {
        define.add("User: " + this.name);
    };
}
 
var DecoratedUser = function(user, street, city) {
    this.user = user;
    this.name = user.name;  // ensures interface stays the same
    this.street = street;
    this.city = city;
 
    this.say = function() {
        define.add("Decorated User: " + this.name + ", " +
                   this.street + ", " + this.city);
    };
}
 
// defining helper
 
var define = (function() {
    var define = "";
 
    return {
        add: function(msg) { define += msg + "\n"; },
        show: function() { console.log(define); define = ""; }
    }
})();
 
function run() {
 
    var user = new User("Siddharth");
    user.say();
 
    var decorated = new DecoratedUser(user, "delhi", "India");
    decorated.say();
 
    define.show();
}
run()