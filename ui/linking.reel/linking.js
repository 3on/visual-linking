/**
 * @module ui/linking.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Linking
 * @extends Component
 */
exports.Linking = Component.specialize(/** @lends Linking# */ {
    visible: {
        value: false
    },
    from: {
        value: null
    },
    to: {
        value: null
    },
    constructor: {
        value: function Linking() {
            this.super();
            this.from = {x:42,y:42};
            this.to = {x:420,y:420};
        }
    },
    enterDocument: {
        value: function (firstTime) {
            if (!firstTime) {
                return;
            }
            this.addPathChangeListener("from", this, "handlePointChange");
            this.addPathChangeListener("to", this, "handlePointChange");
        }
    },
    handlePointChange: {
        value: function () {
            this.needsDraw = true;
        }
    },
    draw: {
        value: function () {
            var mid = {
                x: this.from.x + (this.to.x - this.from.x)/2 ,
                y: this.from.y + (this.to.y - this.from.y)/2
            };
            var dist = Math.sqrt( Math.pow(this.to.x - this.from.x, 2)+ Math.pow(this.to.y - this.from.y, 2) );
            var c1 = {
                x: this.from.x + (mid.x - this.from.x)/2 + dist /4,
                y: this.from.y + (mid.y - this.from.y)/2 - dist /4
            };
            
            var path = "M ";
            // move to start point
            path += this.from.x + " "+ this.from.y;
            // define control point
            path += " Q ";
            path += c1.x + " " + c1.y + ", ";
            path += mid.x + " " + mid.y;
            path += " T ";
            path += this.to.x + " "+ this.to.y;
            this.path.setAttribute("d", path);
        }
    }
});
