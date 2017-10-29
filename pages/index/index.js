var util = require('../../utils/util.js')


const conf = {
    data: {
        hasEmptyGrid: false
    },

    getSystemInfo() {
        try {
            const res = wx.getSystemInfoSync();
            // console.log("windowWidth:" + res.windowWidth);
            // console.log("windowHeight:" + res.windowHeight);
            // console.log("pixelRatio:" + res.pixelRatio);

            this.setData({
                scrollViewHeight: res.windowHeight * res.pixelRatio || 667
            });
        } catch (e) {
            console.log(e);
        }
    },

    getThisMonthDays(year, month) {
        return new Date(year, month, 0).getDate();
    },

    getFirstDayOfWeek(year, month) {
        return new Date(Date.UTC(year, month - 1, 1)).getDay();
    },


    calculateEmptyGrids(year, month) {
        const firstDayOfWeek = this.getFirstDayOfWeek(year, month);
        let empytGrids = [];
        if (firstDayOfWeek > 0) {
            for (let i = 0; i < firstDayOfWeek; i++) {
                empytGrids.push(i);
            }
            this.setData({
                hasEmptyGrid: true,
                empytGrids
            });
        } else {
            this.setData({
                hasEmptyGrid: false,
                empytGrids: []
            });
        }
    },

    calculateDays(year, month) {
        let days = [];
        const thisMonthDays = this.getThisMonthDays(year, month);


        for (let i = 1; i <= thisMonthDays; i++) {
            var calendarItem = {};
            calendarItem.day = i;
            calendarItem.fullDate = util.getDateStr(year,month,i);
            days.push(calendarItem);
        }

        this.setData({
            days

        });
    },

    onLoad(options) {
        const cur_date = new Date();
        const cur_year = cur_date.getFullYear();
        const cur_month = cur_date.getMonth() + 1;
        const cur_day = cur_date.getDate();
        const weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
        this.calculateEmptyGrids(cur_year, cur_month);
        this.calculateDays(cur_year, cur_month);
        this.getSystemInfo();
        this.setData({
            cur_year,
            cur_month,
            cur_day,
            weeks_ch,
            cur_date
        })
    },

    handleCalendar(e) {
        const handle = e.currentTarget.dataset.handle;
        const cur_year = this.data.cur_year;
        const cur_month = this.data.cur_month;
        if (handle === 'prev') {
            let newMonth = cur_month - 1;
            let newYear = cur_year;
            if (newMonth < 1) {
                newYear = cur_year - 1;
                newMonth = 12;
            }

            this.calculateDays(newYear, newMonth);
            this.calculateEmptyGrids(newYear, newMonth);

            this.setData({
                cur_year: newYear,
                cur_month: newMonth
            })

        } else {
            let newMonth = cur_month + 1;
            let newYear = cur_year;
            if (newMonth > 12) {
                newYear = cur_year + 1;
                newMonth = 1;
            }

            this.calculateDays(newYear, newMonth);
            this.calculateEmptyGrids(newYear, newMonth);

            this.setData({
                cur_year: newYear,
                cur_month: newMonth
            })
        }
    },

    onShareAppMessage() {
        return {
            title: 'Mini记',
            desc: '随心记录,舞动人生',
            path: 'pages/index/index'
        }
    },

    gotoDetail: function (e) {
        // wx.showToast({
        //     title: e.currentTarget.dataset.date,
        //     icon: 'success',
        //     duration: 2000
        //
        // });
        wx.navigateTo({
            url: "../mycourse/mycourse?date=" + e.currentTarget.dataset.date
        });
        console.log(e);
    },
};

Page(conf);
