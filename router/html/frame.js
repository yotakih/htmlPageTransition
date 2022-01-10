$(function () {
  // リンクのデフォルトターゲットは一番親のwindow
  $("a").each((i, e) => {
    if (!$(e).attr("target")) $(e).attr("target", "_top");
  });
  $("form").each((i, e) => {
    if (!$(e).attr("target")) $(e).attr("target", "_top");
  });
});
function prev() {
  if (parent.document) {
    $("#iframearea", parent.document).html("");
  }
}
