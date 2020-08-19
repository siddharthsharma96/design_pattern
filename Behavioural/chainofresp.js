var Request = function(amount) {
    this.amount = amount;
    define.add("Requested: $" + amount + "\n");
}
 
Request.prototype = {
    get: function(bill) {
        var count = Math.floor(this.amount / bill);
        this.amount -= count * bill;
        define.add("Dispense " + count + " $" + bill + " bills");
        return this;
    }
}
 
// define helper 
 
var define = (function() {
    var define = "";
 
    return {
        add: function(msg) { define += msg + "\n"; },
        show: function() { console.log(define); define = ""; }
    }
})();
 
function run() {
    var request = new Request(378);
 
    request.get(100).get(50).get(20).get(10).get(5).get(1);
 
    define.show();
}
run()