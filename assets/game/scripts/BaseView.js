const Enum = require("Constant");

cc.Class({
    extends: cc.Component,

    properties: {
        _posX: 0,
        posX: {
            get: function () {
                return this._posX;
            },
            set: function (value) {
                this._posX = value;
                this.node.x = Enum.Design_Cell_Size * value;
            },
        },
        _posY: 0,
        posY: {
            get: function () {
                return this._posY;
            },
            set: function (value) {
                this._posY = value;
                this.node.y = Enum.Design_Cell_Size * value;
            },
        }
    },

    init(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    },

    getCellPosition() {
        return { posX: this.posX, posY: this.posY };
    },
    
    /**
     * 设置逻辑坐标
     * @param {*} posX 
     * @param {*} posY 
     */
    setCellPosition(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    },

    destroyRes() {
        this.node.active = false;
        this.node.destroy();
    },
});
