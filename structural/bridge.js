// input devices
 
var Gestures = function (output) {
    this.output = output;
 
    this.tap = function () { this.output.click(); }
    this.swipe = function () { this.output.move(); }
    this.pan = function () { this.output.drag(); }
    this.pinch = function () { this.output.zoom(); }
};
 
var Mouse = function (output) {
    this.output = output;
 
    this.click = function () { this.output.click(); }
    this.move = function () { this.output.move(); }
    this.down = function () { this.output.drag(); }
    this.wheel = function () { this.output.zoom(); }
};
 
// output devices
 
var Screen = function () {
    this.click = function () { define.add("Screen select"); }
    this.move = function () { define.add("Screen move"); }
    this.drag = function () { define.add("Screen drag"); }
    this.zoom = function () { define.add("Screen zoom in"); }
};
 
var Audio = function () {
    this.click = function () { define.add("Sound oink"); }
    this.move = function () { define.add("Sound waves"); }
    this.drag = function () { define.add("Sound screetch"); }
    this.zoom = function () { define.add("Sound volume up"); }
};
 
// defineging helper
 
var define = (function () {
    var define = "";
 
    return {
        add: function (msg) { define += msg + "\n"; },
        show: function () { console.log(define); define = ""; }
    }
})();
 
function run() {
 
    var screen = new Screen();
    var audio = new Audio();
 
    var hand = new Gestures(screen);
    var mouse = new Mouse(audio);
 
    hand.tap();
    hand.swipe();
    hand.pinch();
 
    mouse.click();
    mouse.move();
    mouse.wheel();
 
    define.show();
}
run()