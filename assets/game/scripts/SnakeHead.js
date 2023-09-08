const SnakeView = require("SnakeView");

cc.Class({
    extends: SnakeView,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    init(posX, posY, dir) {
        if (arguments.length == 2 || dir == null) {
            dir = this.getDirection();
        }
        this._super(posX, posY, dir);
        return this;
    },
    // update (dt) {},
});
