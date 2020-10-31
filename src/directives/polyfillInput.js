/**
 *@description: 自定义指令：ios输入框bug
 *@author: forguo
 *@date: 2020/10/31
 */
import Vue from 'vue';
// 移動端blur后跳轉至頁面最下方
Vue.directive('polyfill-input', {
    bind: function (el) {
        el.onblur = e => {
            window.inputFocuseTimeout && clearTimeout(window.inputFocuseTimeout);
            window.inputFocuseTimeout = setTimeout(() => {
                if (/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(navigator.userAgent)) {
                    window.document.body.scrollTop = window.document.body.scrollHeight;
                }
            }, 0);
        };
        el.onfocus = e => {
            window.inputFocuseTimeout && clearTimeout(window.inputFocuseTimeout);
        };
    },
    unbind: function (el) {
        el.onblur = null;
        el.onfocus = null;
    }
});
