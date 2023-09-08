cc.Class({
    extends: cc.Component,
    properties: {
        
    },

    onLoad() {
        window.app = this;
        this.initManager();
    },

    initManager() {
        this.prefabMgr = this.node.getComponent("PrefabManager").init();
        this.game = this.prefabMgr.gameNode.getComponent('Game');
    },

    onRestartButtonClick() {
        this.game.restart();
    },

    onPauseButtonClick() {
        this.game.pause();
    },
})
