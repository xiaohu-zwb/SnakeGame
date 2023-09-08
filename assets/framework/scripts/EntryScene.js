
cc.Class({
    extends: cc.Component,

    properties: {
        
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
});
