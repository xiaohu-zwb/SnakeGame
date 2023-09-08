// 格子边长（单位：px）
const Design_Cell_Size = 30;
// 地图尺寸
const Design_Cell_Width = 16;
const Design_Cell_Height = 9;
// 蛇的方向
const Direction = cc.Enum({
    Left: 0,
    Down: 1,
    Right: 2,
    Up: 3
});
// 方向组合

// 关卡常规速度（单位：s）
const Level_Speed = {
    ["Level_1"]: 0.15,
    ["Level_2"]: 0.12,
    ["Level_3"]: 0.10,
    ["Level_4"]: 0.09,
    ["Level_5"]: 0.08,
}

// 关卡苹果基础生命值
const Level_Apple_Life_Time = 10;

// 满生命值
const Max_Snake_Life = 20;

const Level = cc.Enum({
    Level_1: 1,
    Level_2: 2,
    Level_3: 3,
    Level_4: 4,
    Level_5: 5,
});

const Level_Score = cc.Enum({
    // 正常版本
    Level_1: 30,
    Level_2: 100,
    Level_3: 300,
    Level_4: 1000,
    Level_5: 9999,
    // 简单版本
    // Level_1: 10,
    // Level_2: 30,
    // Level_3: 60,
    // Level_4: 100,
    // Level_5: 9999,
});

// 最高记录密钥
const Secret_Key = "fsigjis3465756ushfr37";

module.exports = {
    Design_Cell_Size,
    Design_Cell_Width,
    Design_Cell_Height,
    Direction,
    Level_Speed,
    Level,
    Level_Apple_Life_Time,
    Secret_Key,
    Level_Score,
    Max_Snake_Life
}
