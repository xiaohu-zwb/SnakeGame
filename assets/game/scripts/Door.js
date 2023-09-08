const BaseView = require("BaseView");
const Enum = require("Constant");

cc.Class({
    extends: BaseView,

    properties: {
        
    },

    /**
     * 传送门初始化
     * @param {*} posX 
     * @param {*} posY 
     */
    init(posX, posY) {
        this._super(posX, posY);
        return this;
    },

    setAnotherDoor(another) {
        this._another = another;
    },

    getAnotherDoor() {
        return this._another;
    },

    setDoorColor(colorStr) {
        if ("" == colorStr) {
            
        }
    },
});
