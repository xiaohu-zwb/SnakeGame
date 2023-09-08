const Enum = require("Constant");

cc.Class({
    extends: cc.Component,

    properties: {
        dirUp: cc.Node,
        dirDown: cc.Node,
        dirLeft: cc.Node,
        dirRight: cc.Node,
        speedUp: cc.Node,
    },

    onLoad () {
        this.pressedOpacity = 100;
        this.unPressedOpacity = 25;
    },

    start () {

    },

    init() {
        this.reset();
        return this;
    },

    setDirOpacity(dir) {
        this.resetDirOpacity();
        if (dir == Enum.Direction.Left) {
            this.dirLeft.opacity = this.pressedOpacity;
        } else if (dir == Enum.Direction.Right) {
            this.dirRight.opacity = this.pressedOpacity;
        } else if (dir == Enum.Direction.Up) {
            this.dirUp.opacity = this.pressedOpacity;
        } else if (dir == Enum.Direction.Down) {
            this.dirDown.opacity = this.pressedOpacity;
        }
    },

    reset() {
        this.resetDirOpacity();
        this.resetSpeedUpOpacity();
    },

    resetDirOpacity() {
        this.dirUp.opacity = this.unPressedOpacity;
        this.dirDown.opacity = this.unPressedOpacity;
        this.dirLeft.opacity = this.unPressedOpacity;
        this.dirRight.opacity = this.unPressedOpacity;
    },

    resetSpeedUpOpacity() {
        this.speedUp.opacity = this.unPressedOpacity;
    },

    setSpeedUpOpacity() {
        this.speedUp.opacity = this.pressedOpacity;
    },
});
