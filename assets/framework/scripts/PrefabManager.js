
cc.Class({
    extends: cc.Component,
    properties: {
        snakeHead: cc.Prefab,
        snakeBody: cc.Prefab,
        wall: cc.Prefab,
        apple: cc.Prefab,
        stone: cc.Prefab,
        water: cc.Prefab,
        door: cc.Prefab,
        gameNode: cc.Node
    },

    /**
     * 获取预制资源
     * @param {*} prefabName 
     */
    getPrefabByName(prefabName) {
        if (prefabName == "SnakeHead") {
            return this.snakeHead;
        } else if (prefabName == "SnakeBody") {
            return this.snakeBody;
        } else if (prefabName == "Wall") {
            return this.wall;
        } else if (prefabName == "Apple") {
            return this.apple;
        } else if (prefabName == "Stone") {
            return this.stone;
        } else if (prefabName == "Water") {
            return this.water;
        } else if (prefabName == "Door") {
            return this.door;
        }
    },

    init() {
        return this;
    },
})
