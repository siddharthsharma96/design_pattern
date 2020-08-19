function Employee(name) {
    this.name = name;
 
    this.say = function () {
        define.add("I am employee " + name);
    };
}
 
function EmployeeFactory() {
 
    this.create = function(name) {
        return new Employee(name);
    };
}
 
function Vendor(name) {
    this.name = name;
 
    this.say = function () {
        define.add("I am vendor " + name);
    };
}
 
function VendorFactory() {
 
    this.create = function(name) {
        return new Vendor(name);
    };
}
 
// define helper
var define = (function () {
    var define = "";
 
    return {
        add: function (msg) { define += msg + "\n"; },
        show: function () { console.log(define); define = ""; }
    }
})();
 
function run() {
    var persons = [];
    var employeeFactory = new EmployeeFactory();
    var vendorFactory = new VendorFactory();
 
    persons.push(employeeFactory.create("Siddharth Sharma"));
    persons.push(employeeFactory.create("rahul "));
    persons.push(vendorFactory.create("adarsh"));
    persons.push(vendorFactory.create("sat"));
 
    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }
 
    define.show();
}
run()