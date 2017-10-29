/**
 * Created by MaxYu on 2017/3/27.
 */
var app = getApp();

var util = require('../../utils/util.js');

Page({
    onLoad: function (option) {
        var that = this;
        this.setData({
            date: option.date
        });

    },

    formSubmit: function (e) {
        // console.log('form发生了submit事件，携带数据为：', e.detail.value)
        var formData = e.detail.value;
        var today = new Date();
        formData.id = today.getTime();

        var stretchingCourses = (wx.getStorageSync("stretching_" + this.data.date) || []);
        stretchingCourses.push(formData);
        wx.setStorageSync("stretching_" + this.data.date, stretchingCourses);


        wx.showToast({
            title: '添加成功',
            icon: 'success',
            duration: 2000
        });
    },

    formReset: function (e) {
        console.log('form发生了reset事件，携带数据为：', e.detail.value)
        this.setData({
            chosen: ''
        })
    },

    add: function (e) {

    }

});