const BaseView = require("BaseView");
const Enum = require("Constant");

cc.Class({
    extends: BaseView,

    properties: {
        _dir: Enum.Direction.Left,
        dir: {
            get: function () {
                return this._dir;
            },
            set: function (v) {
                if (v != Enum.Direction.Left && v != Enum.Direction.Down && v != Enum.Direction.Right && v != Enum.Direction.Up) {
                    return;
                }
                this._dir = v;
                this.node.angle = v * 90;
            },
        }
    },

    getDirection() {
        return this.dir;
    },

    setDirection(dir) {
        this.dir = dir;
    },

    start () {

    },

    init(posX, posY, dir) {
        this._super(posX, posY);
        this.dir = dir;
    }, 
});
