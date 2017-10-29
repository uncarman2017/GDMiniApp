function formatTime(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()


    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

function getDateStr(year, month, day) {
    return year.toString() + "-" + formatNumber(month) + "-" + formatNumber(day);
}

function formatDate(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return [year, month, day].map(formatNumber).join('-')
}

function removeItemFromArray(arr, from, to) {
    var rest = arr.slice((to || from) + 1 || arr.length);
    arr.length = from < 0 ? arr.length + from : from;
    return arr.push.apply(arr, rest);
    //return rest;
};

// 对Date的扩展，将 Date 转化为指定格式的String   
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
// 例子：   
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18   
// function formatDate(date, fmt) { //author: meizz   
//   var o = {
//     "M+": date.getMonth() + 1,                 //月份   
//     "d+": date.getDate(),                    //日   
//     "h+": date.getHours(),                   //小时   
//     "m+": date.getMinutes(),                 //分   
//     "s+": date.getSeconds(),                 //秒   
//     "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
//     "S": date.getMilliseconds()             //毫秒   
//   };
//   if (/(y+)/.test(fmt))
//     fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
//   for (var k in o)
//     if (new RegExp("(" + k + ")").test(fmt))
//       fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
//   return fmt;
// }


module.exports = {
    formatTime: formatTime,
    formatDate: formatDate,
    getDateStr: getDateStr,
    removeItemFromArray: removeItemFromArray
}
