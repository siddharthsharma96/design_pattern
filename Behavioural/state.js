var TrafficLight = function () {
    var count = 0;
    var currentState = new Red(this);
 
    this.change = function (state) {
        // limits number of changes
        if (count++ >= 10) return;
        currentState = state;
        currentState.go();
    };
 
    this.start = function () {
        currentState.go();
    };
}
 
var Red = function (light) {
    this.light = light;
 
    this.go = function () {
        define.add("Red --> for 1 minute");
        light.change(new Green(light));
    }
};
 
var Yellow = function (light) {
    this.light = light;
 
    this.go = function () {
        define.add("Yellow --> for 10 seconds");
        light.change(new Red(light));
    }
};
 
var Green = function (light) {
    this.light = light;
 
    this.go = function () {
        define.add("Green --> for 1 minute");
        light.change(new Yellow(light));
    }
};
 
// define helper
 
var define = (function () {
    var define = "";
 
    return {
        add: function (msg) { define += msg + "\n"; },
        show: function () { console.log(define); define = ""; }
    }
})();
 
function run() {
    var light = new TrafficLight();
    light.start();
 
    define.show();
}
run()