
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
        this.preloadMusics();
    },

    onStartGameButtonClick() {
        var dirScene = "MainScene";
        cc.director.loadScene(dirScene, (err, scene) => {
            if (err != null) {
                cc.error("Fail to load scene " + err);
                cc.game.end();
                return;
            } else {
                cc.log("load " + dirScene + " successfully");
            }
        })
    },

    // 背景音乐预加载
    preloadMusics() {
        const urls = ['musics/background']
        cc.loader.loadResArray(urls, cc.AudioClip);
    },
});
