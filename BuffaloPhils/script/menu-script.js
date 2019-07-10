<script>
function nWin() {
  var w = window.open();
  var html = $("#toNewWindow").html();

    $(w.document.body).html(html);
}

$(function() {
    $("a#print").click(nWin);
});​
</script>

<div id="toNewWindow">
    <p>Your content here</p>
</div>

<a href="javascript:;" id="print">Open</a>​