cc.Class({
    extends: cc.Component,
    properties: {

    },

    onLoad() {
        window.app = this;
        this.initManager();
        this.preloadAudio();
    },

    initManager() {
        this.prefabMgr = this.node.getComponent("PrefabManager").init();
        this.game = this.prefabMgr.gameNode.getComponent('Game');
    },

    // 音频预加载
    preloadAudio() {
        const urls = ['audios/pause', 'audios/fit', 'audios/eat_apple', 'audios/game_over']
        cc.loader.loadResArray(urls, cc.AudioClip);
    },
})
