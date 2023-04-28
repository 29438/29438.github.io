// ==UserScript==
// @name         安徽省创业服务平台秒刷视频
// @namespace    cpddd.tk
// @version      0.1
// @description  手动点击播放视频，5S后自动跳到视频末尾，学习进度没加上是因为官方服务器太辣鸡延迟大
// @author       程鹏
// @homepage     https://cpddd.tk
// @downloadURL  https://cpddd.tk/page/jb/ahcy.user.js
// @updateURL    https://cpddd.tk/page/jb/ahcy.user.js
// @match        *://*.ahcy.gov.cn/foundTraining/onlineClassDetail.html?*
// @icon         data:image/jpeg;base64,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
// @grant        none
// ==/UserScript==

(function() {

function skip() {
    let video = document.getElementsByTagName('video')
    for (let i=0; i<video.length; i++) {
        video[i].currentTime = video[i].duration
    }
}
setInterval(skip,5000)

})();