//mycourse.js
var app = getApp();

var util = require('../../utils/util.js');

Page({
    data: {
        logs: [],
        courseValue1: [],
        courseValue2: [],
        courseValue3: [],
        courseValue4: [],
        powerCourse: [
            // {"name": "哑铃上举", "weight": "20", "times": "3", "groups": "2", "intervalTimes": "10"},
            // {"name": "哑铃下举", "weight": "30", "times": "3", "groups": "2", "intervalTimes": "20"},
            // {"name": "哑铃上举", "weight": "20", "times": "3", "groups": "2", "intervalTimes": "10"},
            // {"name": "哑铃上举", "weight": "20", "times": "3", "groups": "2", "intervalTimes": "10"},
            // {"name": "哑铃上举", "weight": "20", "times": "3", "groups": "2", "intervalTimes": "10"},
            // {"name": "哑铃上举", "weight": "20", "times": "3", "groups": "2", "intervalTimes": "10"},
            // {"name": "哑铃上举", "weight": "20", "times": "3", "groups": "2", "intervalTimes": "10"},
            // {"name": "哑铃上举", "weight": "20", "times": "3", "groups": "2", "intervalTimes": "10"}

        ],  //力量课程
        aerobicCourse: [
            // {"name": "跑步机", "period": "20", "distance": "10", "speed": "40", "resistance": "20"},
            // {"name": "跑步机", "period": "30", "distance": "15", "speed": "30", "resistance": "20"},
            // {"name": "跑步机", "period": "30", "distance": "10", "speed": "20", "resistance": "20"},
            // {"name": "跑步机", "period": "30", "distance": "10", "speed": "20", "resistance": "20"},
            // {"name": "跑步机", "period": "30", "distance": "10", "speed": "20", "resistance": "20"},
            // {"name": "跑步机", "period": "30", "distance": "10", "speed": "20", "resistance": "20"}

        ],  //有氧课程
        stretchingCourse: [
            // {"name": "上臂屈伸", "period": "20"},
            // {"name": "下腿屈伸", "period": "25"},
            // {"name": "上臂屈伸", "period": "28"},
            // {"name": "上臂屈伸", "period": "28"},
            // {"name": "上臂屈伸", "period": "28"},
            // {"name": "上臂屈伸", "period": "28"},
            // {"name": "上臂屈伸", "period": "28"},
            // {"name": "上臂屈伸", "period": "28"},


        ], //拉伸课程
        selfFeeling: [
            // {"content": "我今天很爽", "recdate": "2017-02-25 12:23:00"},
            // {"content": "我今天很累", "recdate": "2017-02-26 12:23:00"},
            // {"content": "我又爽了", "recdate": "2017-02-27 13:23:00"},
            // {"content": "我又爽了", "recdate": "2017-02-27 13:23:00"},
            // {"content": "我又爽了", "recdate": "2017-02-27 13:23:00"},
            // {"content": "我又爽了", "recdate": "2017-02-27 13:23:00"},
            // {"content": "我又爽了", "recdate": "2017-02-27 13:23:00"}

        ],    //自我感受
        winWidth: 0,
        winHeight: 0,
        // tab切换
        currentTab: 0,
        modalHidden: true,
    },

    onLoad: function (option) {
        var that = this;
        this.setData({
            date: option.date
        });

        wx.setNavigationBarTitle({
            title: '推荐课程表: ' + option.date
        });

        /**
         * 获取系统信息
         */
        wx.getSystemInfo({

            success: function (res) {
                that.setData({
                    //scrollViewHeight: res.windowHeight * res.pixelRatio || 667
                    winWidth: res.windowWidth * res.pixelRatio,
                    winHeight: res.windowHeight * res.pixelRatio
                });
            }

        });

        /*this.setData({
         logs: (wx.getStorageSync('logs') || []).map(function (log) {
         return util.formatTime(new Date(log))
         })
         })*/
    },

    onShow: function (e) {
        //取出本地存储的课程信息
        this.setData(
            {
                powerCourse: wx.getStorageSync("power_" + this.data.date) || [],
                aerobicCourse: wx.getStorageSync("oxygen_" + this.data.date) || [],
                stretchingCourse: wx.getStorageSync("stretching_" + this.data.date) || [],
                selfFeeling: wx.getStorageSync("selffeeling_" + this.data.date) || []
            });

    },

    /**
     * 滑动切换tab
     */
    bindChange: function (e) {

        var that = this;
        that.setData({currentTab: e.detail.current});

    },

    /**
     * 点击tab切换
     */
    swichNav: function (e) {

        var that = this;

        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current
            })
        }
    },

    formSubmit: function (e) {
        console.log('form发生了submit事件,携带数据为：', e.detail.value);
    },
    formReset: function () {
        console.log('form发生了reset事件');
    },
    /*bindChange1: function(e){  //滚动列表项切换时触发此事件
     const val = e.detail.value;
     this.setData({courseValue});
     },*/
    addPower: function (e) {

        wx.navigateTo({
            url: '../mycourse/addpower?date=' + this.data.date,
            success: function (res) {
                // success
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        });
    },
    delPower: function (e) {
        //this.openConfirmDlg(e);
        var id = e.currentTarget.dataset.id;
        var courses = this.data.powerCourse;
        var index = 0;

        courses.forEach(
            function (course) {
                if (course.id == id) {
                    util.removeItemFromArray(courses, index);
                    return;
                }

                index++;
            });

        wx.setStorageSync("power_" + this.data.date, courses);
        this.setData({powerCourse: courses});
        wx.showToast({
            title: "删除成功",
            icon: 'success',
            duration: 2000
        });

    },

    addOxygen: function (e) {
        wx.navigateTo({
            url: '../mycourse/addoxygen?date=' + this.data.date,
            success: function (res) {
                // success
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        });
    },
    delOxygen: function (e) {
        //this.openConfirmDlg(e);
        var id = e.currentTarget.dataset.id;
        var courses = this.data.aerobicCourse;
        var index = 0;

        courses.forEach(
            function (course) {
                if (course.id == id) {
                    util.removeItemFromArray(courses, index);
                    return;
                }

                index++;
            });

        wx.setStorageSync("oxygen_" + this.data.date, courses);
        this.setData({aerobicCourse: courses});
        wx.showToast({
            title: "删除成功",
            icon: 'success',
            duration: 2000
        });


    },
    addStretching: function (e) {
        wx.navigateTo({
            url: '../mycourse/addstretching?date=' + this.data.date,
            success: function (res) {
                // success
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        });
    },
    delStretching: function (e) {
        //this.openConfirmDlg(e);
        var id = e.currentTarget.dataset.id;
        var courses = this.data.stretchingCourse;
        var index = 0;

        courses.forEach(
            function (course) {
                if (course.id == id) {
                    util.removeItemFromArray(courses, index);
                    return;
                }

                index++;
            });
        wx.setStorageSync("stretching_" + this.data.date, courses);
        this.setData({stretchingCourse: courses});
        wx.showToast({
            title: "删除成功",
            icon: 'success',
            duration: 2000
        });


    },
    addSelfFeeling: function (e) {
        wx.navigateTo({
            url: '../mycourse/addselffeeling?date=' + this.data.date,
            success: function (res) {
                // success
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        });
    },
    delSelfFeeling: function (e) {
        // this.openConfirmDlg(e);
        var id = e.currentTarget.dataset.id;
        var courses = this.data.selfFeeling;
        var index = 0;

        courses.forEach(
            function (course) {
                if (course.id == id) {
                    util.removeItemFromArray(courses, index);
                    return;
                }

                index++;
            });

        wx.setStorageSync("selffeeling_" + this.data.date, courses);
        this.setData({selfFeeling: courses});
        wx.showToast({
            title: "删除成功",
            icon: 'success',
            duration: 2000
        });


    },

    // 下拉刷新回调接口
    onPullDownRefresh: function () {
        // do somthing
    },

    openConfirmDlg: function (e) {
        this.setData({
            modalHidden: false,
        })
    },

    confirm: function (e) {
        this.setData({
            modalHidden: true,
            confirmed: true
        });
    },

    cancel: function (e) {
        this.setData({
            modalHidden: true,
            confirmed: false
        });
    }
})
