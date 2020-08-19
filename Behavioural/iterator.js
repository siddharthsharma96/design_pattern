var Iterator = function(items) {
    this.index = 0;
    this.items = items;
}
 
Iterator.prototype = {
    first: function() {
        this.reset();
        return this.next();
    },
    next: function() {
        return this.items[this.index++];
    },
    hasNext: function() {
        return this.index <= this.items.length;
    },
    reset: function() {
        this.index = 0;
    },
    each: function(callback) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
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
    var items = ["Siddharth", 9, "nov", 1996,true];
    var iter = new Iterator(items);
 
    // using for loop
 
    for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
        define.add(item);
    }
    define.add("");
 
    // using Iterator's each method
 
    iter.each(function(item) {
        define.add(item);
    });
 
    define.show();
}
run()