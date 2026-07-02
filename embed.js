/*
 * embed.js — 页面嵌入适配（三页共用，替代原先各页内重复的内联片段）
 * 作用：当页面被 index.html 外壳以 iframe 嵌入时，隐藏本页自带的顶栏/侧边导航，
 *       并让主内容区填满 iframe；页面被单独打开时保持完整形态，互不影响。
 */
(function () {
  if (window.self === window.top) return;           // 非嵌入（单独打开）→ 不做任何改动
  document.documentElement.classList.add('embedded');
  var style = document.createElement('style');
  style.id = 'embed-shell-override';
  style.textContent =
    '.hdr,.nav{display:none!important;}' +
    '.main{top:0!important;left:0!important;}' +
    /* 控制页的覆盖层原按顶栏高/导航宽偏移，嵌入后 chrome 已隐藏需归零，否则错位 */
    '.spg{top:0!important;left:0!important;}' +
    '.drawer{top:0!important;}';
  (document.head || document.documentElement).appendChild(style);
})();
