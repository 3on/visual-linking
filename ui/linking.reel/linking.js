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
            var mid = {x: (this.to.x - this.from.x)/2 , y: (this.to.y - this.from.y)/2};
            
            var path = "M ";
            path += this.from.x + " "+ this.from.y;
            path += " L ";
            path += this.to.x + " "+ this.to.y;
            this.path.setAttribute("d", path);
        }
    }
});
