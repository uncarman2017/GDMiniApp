//logs.js
var util = require('../../utils/util.js')
Page({
    data: {
        logs: [],
        courseValue1: [],
        courseValue2: [],
        courseValue3: [],
        courseValue4: [],
        powerCourse: [
            {"name": "哑铃上举", "weight": "20", "times": "3", "groups": "2", "intervalTimes": "10"},
            {"name": "哑铃下举", "weight": "30", "times": "3", "groups": "2", "intervalTimes": "20"},
            {"name": "哑铃上举", "weight": "20", "times": "3", "groups": "2", "intervalTimes": "10"},
            {"name": "哑铃上举", "weight": "20", "times": "3", "groups": "2", "intervalTimes": "10"},
            {"name": "哑铃上举", "weight": "20", "times": "3", "groups": "2", "intervalTimes": "10"},
            {"name": "哑铃上举", "weight": "20", "times": "3", "groups": "2", "intervalTimes": "10"},
            {"name": "哑铃上举", "weight": "20", "times": "3", "groups": "2", "intervalTimes": "10"},
            {"name": "哑铃上举", "weight": "20", "times": "3", "groups": "2", "intervalTimes": "10"}

        ],  //力量课程
        aerobicCourse: [
            {"name": "跑步机", "period": "20", "distance": "10", "speed": "40", "resistance": "20"},
            {"name": "跑步机", "period": "30", "distance": "15", "speed": "30", "resistance": "20"},
            {"name": "跑步机", "period": "30", "distance": "10", "speed": "20", "resistance": "20"},
            {"name": "跑步机", "period": "30", "distance": "10", "speed": "20", "resistance": "20"},
            {"name": "跑步机", "period": "30", "distance": "10", "speed": "20", "resistance": "20"},
            {"name": "跑步机", "period": "30", "distance": "10", "speed": "20", "resistance": "20"}

        ],  //有氧课程
        stretchingCourse: [
            {"name": "上臂屈伸", "period": "20"},
            {"name": "下腿屈伸", "period": "25"},
            {"name": "上臂屈伸", "period": "28"},
            {"name": "上臂屈伸", "period": "28"},
            {"name": "上臂屈伸", "period": "28"},
            {"name": "上臂屈伸", "period": "28"},
            {"name": "上臂屈伸", "period": "28"},
            {"name": "上臂屈伸", "period": "28"},


        ], //拉伸课程
        selfFeeling: [
            {"content": "我今天很爽", "recdate": "2017-02-25 12:23:00"},
            {"content": "我今天很累", "recdate": "2017-02-26 12:23:00"},
            {"content": "我又爽了", "recdate": "2017-02-27 13:23:00"},
            {"content": "我又爽了", "recdate": "2017-02-27 13:23:00"},
            {"content": "我又爽了", "recdate": "2017-02-27 13:23:00"},
            {"content": "我又爽了", "recdate": "2017-02-27 13:23:00"},
            {"content": "我又爽了", "recdate": "2017-02-27 13:23:00"}

        ],    //自我感受
        winWidth: 0,
        winHeight: 0,
        // tab切换
        currentTab: 0,
        modalHidden: true,

    },
    onLoad: function () {
        wx.showNavigationBarLoading();
        wx.setNavigationBarTitle({
            title: '教练日志',
            success: function (res) {
                // success
            }
        });
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return util.formatTime(new Date(log))
            })
        });
        wx.hideNavigationBarLoading();
    }
})
