function Click() {
    this.handlers = [];  // observers
}
 
Click.prototype = {
 
    subscribe: function(fn) {
        this.handlers.push(fn);
    },
 
    unsubscribe: function(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },
 
    fire: function(o, thisObj) {
        var scope = thisObj ;
        this.handlers.forEach(function(item) {
            item.call(scope, o);
        });
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
 
    var clickHandler = function(item) { 
        define.add("fired: " + item); 
    };
 
    var click = new Click();
 
    click.subscribe(clickHandler);
    click.fire('event #1');
    click.unsubscribe(clickHandler);
    click.fire('event #2');
    click.subscribe(clickHandler);
    click.fire('event #3');
 
    define.show();
}
run ()