/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    enterDocument: {
        value: function (firstTime) {
            if (!firstTime) {
                return;
            }
            this.element.addEventListener("mousedown", this, false);
            this.element.addEventListener("mousemove", this, false);
            this.element.addEventListener("mouseup", this, false);
        }
    },
    handleMousedown: {
        value: function (evt) {
            if (evt.target !== this.start.element) {
                return;
            }
            this.linking.visible = true;
            this.linking.from = {x:evt.pageX, y:evt.pageY};
        }
    },
    handleMouseup: {
        value: function (evt) {
            this.linking.visible = false;
            this.linking.complete = evt.target === this.finish.element;
        }
    },
    handleMousemove: {
        value: function (evt) {
            this.linking.to = {x:evt.pageX, y:evt.pageY};
        }
    }
    
});
